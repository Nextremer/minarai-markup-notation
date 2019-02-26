import {
  LAMBDA,
  MmlError,
} from './constants';

export class MmlRendererError extends MmlError {};
export class MmlInvalidSexpError extends MmlRendererError {};
export class MmlRendererNotFoundError extends MmlRendererError {};
export class MmlRendererFnValueConvertionError extends MmlRendererError {};
export class MmlUnknownError extends MmlRendererError {};

const renderSexpTel = (telno) => {
  // 電話番号はハイフンありでもよいらしい
  // https://webliker.info/65145/#toc_2
  const numericTelno = telno; // TODO: バリデーションと変換
  return `<a href="tel:${numericTelno}">${telno}</a>`;
};

export const DEFAULT_RENDERER = {
  'tel': renderSexpTel
};

const renderLambda = (sexp, renderer) => {
  const name = sexp[1];
  const fn = renderer[name];
  if (!fn) {
    throw new MmlRendererNotFoundError(name);
  } else {
    try {
      return fn(...sexp.slice(2));
    } catch (e) {
      if (typeof e === 'TypeError') {
        throw new MmlRendererFnValueConvertionError(sexp);
      } else {
        throw new MmlUnknownError(e);
      }
    }
  }
};

const renderArgs = (sexp, renderer) => {
  const reduceArgs = (acc, val) => {
    if (typeof val === 'string') {
      return acc.concat(val);
    } else if (Array.isArray(val) && val[0] && val[0] === LAMBDA) {
      return acc.concat(renderLambda(val, renderer));
    } else {
      throw new MmlInvalidSexpError(val);
    }
  };

  return sexp.reduce(reduceArgs, '');
};

export const render = (sexp, renderer = DEFAULT_RENDERER) => {
  if (Array.isArray(sexp)) {
    return renderArgs(sexp, renderer);
  } else if (Array.isArray(sexp) && sexp[0] && sexp[0] === LAMBDA) {
    return renderLambda(sexp, renderer);
  } else {
    throw new MmlInvalidSexpError(sexp);
  }
};
