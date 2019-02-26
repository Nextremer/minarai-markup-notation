import {
  MmlParseError,
  MmlMarkupHasNoNameError,
  MmlUnexpectedEndOfStringError,
  MmlUnmatchedBracketError,
  parse
} from './parser';

export const DEFAULT_RENDERER = {
};

export const render = (result, renderer = DEFAULT_RENDERER) => {
};

module.exports = {
  MmlParseError,
  MmlMarkupHasNoNameError,
  MmlUnexpectedEndOfStringError,
  MmlUnmatchedBracketError,
  parse
};
