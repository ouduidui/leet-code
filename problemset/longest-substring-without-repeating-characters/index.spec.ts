import { lengthOfLongestSubstring, lengthOfLongestSubstring2 } from './index';

describe('无重复字符的最长子串', () => {
  describe('暴力解法', () => {
    testCase(lengthOfLongestSubstring);
  });

  describe('滑动窗口', () => {
    testCase(lengthOfLongestSubstring2);
  });
});

function testCase(fn: (s: string) => number) {
  test('示例一', () => {
    const s = 'abcabcbb';
    const expected = 3;

    expect(fn(s)).toBe(expected);
  });

  test('示例二', () => {
    const s = 'bbbbb';
    const expected = 1;

    expect(fn(s)).toBe(expected);
  });

  test('示例三', () => {
    const s = 'pwwkew';
    const expected = 3;

    expect(fn(s)).toBe(expected);
  });

  test('示例四', () => {
    const s = '';
    const expected = 0;

    expect(fn(s)).toBe(expected);
  });

  test('示例五', () => {
    const s = 'dvdf';
    const expected = 3;

    expect(fn(s)).toBe(expected);
  });
}
