import { LAMBDA } from '../src/constants';
import {
  parse,
  render,
  MmlRendererFnConvertionError,
} from '../src';

const renders = (s) => render(parse(s));

test('電話番号', () => {
  expect(renders('電話番号はこちら#.tel[0120444444]まで！'))
  .toEqual('電話番号はこちら<a href="tel:0120444444">0120444444</a>まで！');

  // 変換はしない（ハイフン入ってていいらしい）
  expect(renders('電話番号はこちら#.tel[0120-444-444]まで！'))
  .toEqual('電話番号はこちら<a href="tel:0120-444-444">0120-444-444</a>まで！');

  // 不正な電話番号の場合は例外を投げる
  expect(() => renders('電話番号はこちら#.tel[ああああああ]まで！'))
  .toThrow(new MmlRendererFnConvertionError('Error: ああああああ'));
});

test('Youtube', () => {
  expect(renders('動画こちら#.youtube[C0DPdy98e4c]まで！'))
    .toEqual('動画こちら<span data-type="video" data-name="youtube" data-value="https://www.youtube.com/watch?v=C0DPdy98e4c" >https://www.youtube.com/watch?v=C0DPdy98e4c</span>まで！');
});

test('Vimeo', () => {
  expect(renders('動画こちら#.vimeo[253989945]まで！'))
    .toEqual('動画こちら<span data-type="video" data-name="vimeo" data-value="https://vimeo.com/253989945" >https://vimeo.com/253989945</span>まで！');
});
