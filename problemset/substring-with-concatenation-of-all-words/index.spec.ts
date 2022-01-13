import { findSubstring } from './index';

describe('串联所有单词的子串', () => {
  describe('滑动窗口', () => {
    testCase(findSubstring);
  });
});

function testCase(fn: (s: string, words: string[]) => number[]) {
  test('示例一', () => {
    const s = 'barfoothefoobarman';
    const words: string[] = ['foo', 'bar'];
    const expected: number[] = [0, 9];

    expect(fn(s, words)).toEqual(expected);
  });

  test('示例二', () => {
    const s = 'wordgoodgoodgoodbestword';
    const words: string[] = ['word', 'good', 'best', 'word'];
    const expected: number[] = [];

    expect(fn(s, words)).toEqual(expected);
  });

  test('示例三', () => {
    const s = 'barfoofoobarthefoobarman';
    const words: string[] = ['bar', 'foo', 'the'];
    const expected: number[] = [6, 9, 12];

    expect(fn(s, words)).toEqual(expected);
  });
}
