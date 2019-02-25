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
  return [LAMBDA, name, ...rootReader(stream)];
};

const rootReader = (stream, isRoot = false) => {
  let chbuf = [];
  let result = [];
  let arg = [];

  // chbuf/resultを破壊的に変更したいがためにレキシカルクロージャに…😭
  const finalizeArg = () => {
    arg.push(chbuf.join(''));
    chbuf = [];
    if (arg.length > 1) {
      result = [...result, ...arg];
    } else {
      result.push(arg[0]);
    }
    arg = [];
  };

  const flush = () => {
    if (isRoot) {
      chbuf.push(stream.read());
    } else {
      stream.read();
      finalizeArg();
    }
  };

  const sharpReader = (stream) => {
    stream.read();
    arg.push(chbuf.join(''));
    chbuf = [];
    if (ch !== null || ch !== '.') {
      stream.read();
      const markup = sharpdotReader(stream);
      if (typeof markup === 'string') {
        chbuf.push(markup);
      } else {
        arg.push(markup);
      }
    } else {
      chbuf.push('#');
    }
  };

  // rootReaderのメイン処理
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
  const result = rootReader(new CharacterStream(str), true);
  console.log(result);
  return result.length === 0 ? [''] : result;
};

export const DEFAULT_RENDERER = {
};

export const render = (result, renderer = DEFAULT_RENDERER) => {
};
