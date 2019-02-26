import { LAMBDA, MmlError } from './constants';
import { CharacterStream } from './streams';

export class MmlParseError extends MmlError {};
export class MmlMarkupHasNoNameError extends MmlError {};
export class MmlUnexpectedEndOfStringError extends MmlError {};

const sharpdotReader = (stream) => {
  let name = stream.readTo('[');
  if (name.length === 0) {
    // 名前が0文字なのでエラー
      throw new MmlMarkupHasNoNameError();
  }
  if (stream.read() === null) {
    throw new MmlUnExpectedEndOfStringError('');
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
    let ch = stream.peek();
    if (ch === null || ch === '#') {
      chbuf.push('#');
    } else if (ch !== '.') {
      chbuf.push('#' + stream.read());
    } else {
      stream.read();
      const markup = sharpdotReader(stream);
      if (typeof markup === 'string') {
        chbuf.push(markup);
      } else {
        args.push(markup);
      }
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
