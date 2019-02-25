import { LAMBDA, parse } from 'minarai-markup-notation';

test('plain text only', () => {
  expect(parse('')).toEqual(['']);
  expect(parse('こんにちは')).toEqual(['こんにちは']);
  expect(parse('こんにちは\nさようなら')).toEqual(['こんにちは\nさようなら']);
});

test('markup', () => {
  expect(parse('電話はこちら: #.tel[0120-444-444]へ'))
  .toEqual(['電話はこちら: ', [LAMBDA, 'tel', '0120-444-444'], 'へ']);

  expect(parse('電話はこちら: #.tel[0120-444-444]'))
  .toEqual(['電話はこちら: ', [LAMBDA, 'tel', '0120-444-444'], '']);
});

test('markup with params', () => {
  expect(parse('電話はこちら: #.tel[0120-444-444;hoge]'))
  .toEqual(['電話はこちら: ', [LAMBDA, 'tel', '0120-444-444', 'hoge'], '']);

  expect(parse('電話はこちら: #.tel[0120-444-444;hoge;piyo]'))
  .toEqual(['電話はこちら: ', [LAMBDA, 'tel', '0120-444-444', 'hoge', 'piyo'], '']);
});

console.log(parse('電話はこちら: #.tel[0120-444-444;hoge#.foo[bar;buzz]fuga;piyo]'));
test('recursive markup with params', () => {
  expect(parse('電話はこちら: #.tel[0120-444-444;hoge]'))
  .toEqual(['電話はこちら: ', [LAMBDA, 'tel', '0120-444-444', 'hoge'], '']);

  expect(parse('電話はこちら: #.tel[0120-444-444;hoge#.foo[bar;buzz]fuga;piyo]'))
  .toEqual(['電話はこちら: ', [LAMBDA, 'tel', '0120-444-444', ['hoge', [LAMBDA, 'foo', 'bar', 'buzz'] ,'fuga'], 'piyo'], '']);
});

test('edge case', () => {
});

test('errors', () => {
});
