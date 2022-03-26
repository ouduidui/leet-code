import { longestPalindrome, longestPalindrome2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('最长回文子串', () => {
  describe('中心扩展', () => {
    testCase(longestPalindrome);
  });

  describe('Manacher算法', () => {
    testCase(longestPalindrome2);
  });
});

function testCase(fn: (s: string) => string) {
  it('示例一', () => {
    const s = 'babad';

    expect(fn(s)).toMatch(/bab|aba/);
  });

  it('示例二', () => {
    const s = 'cbbd';
    const expected = 'bb';

    expect(fn(s)).toBe(expected);
  });

  it('示例三', () => {
    const s = 'a';
    const expected = 'a';

    expect(fn(s)).toBe(expected);
  });

  it('示例四', () => {
    const s = 'ac';
    expect(fn(s)).toMatch(/a|c/);
  });

  it('示例五', () => {
    const s = 'bb';
    const expected = 'bb';

    expect(fn(s)).toBe(expected);
  });

  it('示例六', () => {
    const s = 'ccc';
    const expected = 'ccc';

    expect(fn(s)).toBe(expected);
  });

  it('示例七', () => {
    const s = 'aaaa';
    const expected = 'aaaa';

    expect(fn(s)).toBe(expected);
  });
}
