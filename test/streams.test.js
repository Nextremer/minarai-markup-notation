import { CharacterStream } from '../src/streams';

test('`read` reads ahead from buffer', () => {
  const s = new CharacterStream('hoge');
  expect(s.read()).toBe('h');
  expect(s.read()).toBe('o');
  expect(s.read()).toBe('g');
  expect(s.read()).toBe('e');
  expect(s.read()).toBe(null);
});

test('`peek` reads but not forward', () => {
  const s = new CharacterStream('hoge');
  expect(s.peek()).toBe('h');
  expect(s.read()).toBe('h');
  expect(s.read()).toBe('o');
  expect(s.read()).toBe('g');
  expect(s.peek()).toBe('e');
  expect(s.read()).toBe('e');
  expect(s.peek()).toBe(null);
  expect(s.peek()).toBe(null);
});

test('sequential read', () => {
  let s = new CharacterStream('123,456');
  expect(s.readTo(',')).toBe('123');
  expect(s.peek()).toBe(',');

  s = new CharacterStream('123,');
  expect(s.readTo(',')).toBe('123');
  expect(s.peek()).toBe(',');

  s = new CharacterStream('123');
  expect(s.readTo(',')).toBe('123');
  expect(s.peek()).toBe(null);
});
