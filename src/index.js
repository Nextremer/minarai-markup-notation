export class CharacterStream {
  constructor(str) {
    this.buffer = str;
    this.head = 0;
  }
  peek() {
    if (this.head >= this.buffer.length) {
      return null;
    } else {
      const ch = this.buffer[this.head];
      return ch;
    }
  }
  read() {
    if (this.head >= this.buffer.length) {
      return null;
    } else {
      const ch = this.buffer[this.head];
      this.head++;
      return ch;
    }
  }
  readTo(chars) {
    let s = [];
    let ch = this.peek();
    while (ch !== null && chars.indexOf(ch) === -1) {
      s.push(this.read());
      ch = this.peek();
    }
    return s.join('');;
  }
  // write(ch) {}
}

export const LAMBDA = Symbol('lambda');

const sharpdotReader = (stream) => {
  let name = stream.readTo('[');
  if (name.length === 0) {
    // 名前が0文字なのでエラー
      throw Error('empty name');
  }
  if (stream.read() === null) {
    throw Error('unexpected end while parsing expression');
  }
  return [LAMBDA, name, ...argsReader(stream)];
};

const argsReader = (stream, isRoot = false) => {
  let chbuf = [],
      args = [],
      result = [];

  // chbuf/resultを破壊的に変更したいがためにレキシカルクロージャに…😭
  const finalizeArg = () => {
    if (chbuf.length > 0) {
      args.push(chbuf.join(''));
      chbuf = [];
    }
    // （トップレベルでない）一個しかないパラメータをリストとするのは冗長なのでunpackする
    if (isRoot || args.length > 1) {
      result.push(args);
    } else if (args.length !== 0) {
      result.push(args[0]);
    }
    args = [];
  };

  // `;`や`]`のときの処理
  const flush = () => {
    if (isRoot) {
      chbuf.push(stream.read());
    } else {
      stream.read();
      finalizeArg();
    }
  };

  // `#`のときの処理
  const sharpReader = (stream) => {
    stream.read();
    if (chbuf.length > 0) {
      args.push(chbuf.join(''));
      chbuf = [];
    }
    if (ch !== null || ch !== '.') {
      stream.read();
      const markup = sharpdotReader(stream);
      if (typeof markup === 'string') {
        chbuf.push(markup);
      } else {
        args.push(markup);
      }
    } else {
      chbuf.push('#');
    }
  };

  // argsReaderのメイン処理
  let ch = stream.peek();
  while (ch !== null) {
    switch (ch) {
      case '#':
        sharpReader(stream);
        break;
      case ';':
        flush();
        break;
      case ']':
        flush();
        return result;
      default:
        chbuf.push(stream.read());
    }
    ch = stream.peek();
  }
  finalizeArg();
  return result;
};

export const parse = (str) => {
  // トップレベルの文字列も1個だけのパラメータとして扱っている
  // argsReaderはパラメータリストを返すので、トップレベルだけ0番目を取り出している
  const result = argsReader(new CharacterStream(str), true)[0];
  return result.length === 0 ? [''] : result;
};

export const DEFAULT_RENDERER = {
};

export const render = (result, renderer = DEFAULT_RENDERER) => {
};
