import { LAMBDA } from '../src/constants';
import {
  parse,
  render,
  MmlRendererFnConvertionError,
} from 'minarai-markup-notation';

const renders = (s) => render(parse(s));

test('電話番号', () => {
  expect(renders('電話番号はこちら#.tel[0120444444]まで！'))
  .toEqual('電話番号はこちら<a href="tel:0120444444">0120444444</a>まで！');

  // 変換はしない（ハイフン入ってていいらしい）
  expect(renders('電話番号はこちら#.tel[0120-444-444]まで！'))
  .toEqual('電話番号はこちら<a href="tel:0120-444-444">0120-444-444</a>まで！');

  // 不正な電話番号の場合は例外を投げる
  expect(() => renders('電話番号はこちら#.tel[ああああああ]まで！'))
  .toThrow(MmlRendererFnConvertionError);
});
