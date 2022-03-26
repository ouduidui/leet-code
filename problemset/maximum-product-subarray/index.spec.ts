import { maxProduct, maxProduct2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('乘积最大子数组', () => {
  describe('暴力解法', () => {
    testCase(maxProduct);
  });

  describe('动态规划', () => {
    testCase(maxProduct2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [2, 3, -2, 4];
    const expected = 6;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [-2, 0, -1];
    const expected = 0;
    expect(fn(nums)).toBe(expected);
  });
}
