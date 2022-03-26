import { isMatch } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe(' 正则表达式匹配', () => {
  describe('动态规划', () => {
    testCase(isMatch);
  });
});

function testCase(fn: (s: string, p: string) => boolean) {
  it('示例一', () => {
    const s = 'aa';
    const p = 'a';
    const expected = false;

    expect(fn(s, p)).toBe(expected);
  });

  it('示例二', () => {
    const s = 'aa';
    const p = 'a*';
    const expected = true;

    expect(fn(s, p)).toBe(expected);
  });

  it('示例三', () => {
    const s = 'ab';
    const p = '.*';
    const expected = true;

    expect(fn(s, p)).toBe(expected);
  });

  it('示例四', () => {
    const s = 'aab';
    const p = 'c*a*b';
    const expected = true;

    expect(fn(s, p)).toBe(expected);
  });

  it('示例五', () => {
    const s = 'mississippi';
    const p = 'mis*is*p*.';
    const expected = false;

    expect(fn(s, p)).toBe(expected);
  });
}
