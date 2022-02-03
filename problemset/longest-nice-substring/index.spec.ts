import {
  longestNiceSubstring,
  longestNiceSubstring2,
  longestNiceSubstring3
} from './index';

describe('最长的美好子字符串', () => {
  describe('暴力解法', () => {
    testCase(longestNiceSubstring);
  });

  describe('分治', () => {
    testCase(longestNiceSubstring2);
  });

  describe('滑动窗口', () => {
    testCase(longestNiceSubstring3);
  });
});

function testCase(fn: (s: string) => string) {
  it('示例一', () => {
    const s = 'YazaAay';
    const expected = 'aAa';
    expect(fn(s)).toBe(expected);
  });

  it('示例二', () => {
    const s = 'Bb';
    const expected = 'Bb';
    expect(fn(s)).toBe(expected);
  });

  it('示例三', () => {
    const s = 'c';
    const expected = '';
    expect(fn(s)).toBe(expected);
  });

  it('示例四', () => {
    const s = 'dDzeE';
    const expected = 'dD';
    expect(fn(s)).toBe(expected);
  });
}
