import { LAMBDA } from '../src/constants';
import {
  DEFAULT_RENDERER,
  render,
} from 'minarai-markup-notation';

const testRenderer = {
  ...DEFAULT_RENDERER,
  'empty': () => '',
  'arity1': (arg) => `${arg}`,
  'arity2': (arg1, arg2) => `${arg1},${arg2}`,
  'rec': (arg) => ('__' + render(arg, testRenderer) + '__'),
};

test('マークアップなしS式', () => {
  expect(render([''])).toEqual('');
  expect(render(['こんにちは'])).toEqual('こんにちは');
  expect(render(['こんにちは\nさようなら'])).toEqual('こんにちは\nさようなら');
});

test('マークアップありS式', () => {
  expect(render([[LAMBDA, 'empty']], testRenderer)).toEqual('');
  expect(render(['空の', [LAMBDA, 'empty'], 'マークアップ'], testRenderer)).toEqual('空のマークアップ');

});

test('マークアップありS式 (パラメータあり)', () => {
  expect(render([[LAMBDA, 'arity1', 'パラメータが1つ']], testRenderer)).toEqual('パラメータが1つ');
  expect(render([[LAMBDA, 'arity2', 'パラメータ1', 'パラメータ2']], testRenderer))
  .toEqual('パラメータ1,パラメータ2');
});

test('マークアップありS式 (入れ子あり)', () => {
  expect(render(['入れ子1: ', [LAMBDA, 'rec', ['--', [LAMBDA, 'arity1', '文字列'], '--']]], testRenderer))
  .toEqual('入れ子1: __--文字列--__');
});
