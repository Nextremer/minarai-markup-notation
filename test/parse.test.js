import {
  LAMBDA,
  MmlMarkupHasNoNameError,
  MmlUnexpectedEndOfStringError,
  parse
} from 'minarai-markup-notation';

test('ただの文字列', () => {
  expect(parse('')).toEqual(['']);
  expect(parse('こんにちは')).toEqual(['こんにちは']);
  expect(parse('こんにちは\nさようなら')).toEqual(['こんにちは\nさようなら']);
});

test('マークアップしてみるテスト', () => {
  expect(parse('空のマークアップ#.empty[]です。'))
  .toEqual(['空のマークアップ', [LAMBDA, 'empty'], 'です。']);

  expect(parse('電話はこちらの電話番号#.tel[0120-444-444]まで！'))
  .toEqual(['電話はこちらの電話番号', [LAMBDA, 'tel', '0120-444-444'], 'まで！']);

  expect(parse('電話はこちら: #.tel[0120-444-444]'))
  .toEqual(['電話はこちら: ', [LAMBDA, 'tel', '0120-444-444']]);
});

test('パラメータが複数あるタイプのマークアップ (`;`で区切る)', () => {
  expect(parse('電話はこちら: #.tel[0120-444-444;hoge]'))
  .toEqual(['電話はこちら: ', [LAMBDA, 'tel', '0120-444-444', 'hoge']]);

  expect(parse('電話はこちら: #.tel[0120-444-444;hoge;piyo]'))
  .toEqual(['電話はこちら: ', [LAMBDA, 'tel', '0120-444-444', 'hoge', 'piyo']]);
});

// console.log(parse('電話はこちら: #.tel[0120-444-444;hoge#.foo[aaaa;#.test[aaa;bbbb]];buzz]fuga;piyo]'));
test('入れ子になってるマークアップ', () => {
  expect(parse('電話はこちら: #.tel[0120-444-444;#.foo[bar;buzz];piyo]へ！'))
  .toEqual(['電話はこちら: ',
            [LAMBDA, 'tel', '0120-444-444',
                     [LAMBDA, 'foo', 'bar', 'buzz'] ,'piyo'],
            'へ！']);

  expect(parse('電話はこちら: #.tel[0120-444-444;hoge#.foo[bar;buzz]fuga;piyo]'))
  .toEqual(['電話はこちら: ',
            [LAMBDA, 'tel',
                     '0120-444-444',
                     ['hoge', [LAMBDA, 'foo', 'bar', 'buzz'] ,'fuga'],
                     'piyo']]);

  expect(parse('電話はこちら: #.tel[0120-444-444;hoge#.foo[#.test[testtest];buzz]fuga;piyo]'))
  .toEqual(['電話はこちら: ',
           [LAMBDA, 'tel', '0120-444-444',
                    ['hoge', [LAMBDA, 'foo', [LAMBDA, 'test', 'testtest'], 'buzz'], 'fuga'],
                    'piyo']
           ]);
});

test('構文上のコーナーケースのテスト', () => {
  expect(parse('シャープのみ#')).toEqual(['シャープのみ', '#']);
  expect(parse('シャープのみ#です')).toEqual(['シャープのみ', '#です']);
  expect(parse('シャープと別の文字#:')).toEqual(['シャープと別の文字', '#:']);

  expect(() => parse('シャープドットのみ#.')).toThrowError(MmlMarkupHasNoNameError);

  expect(parse('シャープ連続##.tel[0120-444-444]'))
  .toEqual(['シャープ連続', '#', [LAMBDA, 'tel', '0120-444-444']]);

});

test('errors', () => {
});
