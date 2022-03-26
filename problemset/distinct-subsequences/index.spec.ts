import { numDistinct, numDistinct2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('不同的子序列', () => {
  describe('回溯', () => {
    testCase(numDistinct);
  });

  describe('动态规划', () => {
    testCase(numDistinct2);
  });
});

function testCase(fn: (s: string, t: string) => number) {
  it('示例一', () => {
    const s = 'rabbbit';
    const t = 'rabbit';
    const expected = 3;
    expect(fn(s, t)).toBe(expected);
  });

  it('示例二', () => {
    const s = 'babgbag';
    const t = 'bag';
    const expected = 5;
    expect(fn(s, t)).toBe(expected);
  });

  it('示例三', () => {
    const s =
      'adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc';
    const t = 'bcddceeeebecbc';
    const expected = 700531452;
    expect(fn(s, t)).toBe(expected);
  });
}
