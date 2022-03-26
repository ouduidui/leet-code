import { maxSubArray, maxSubArray2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('最大子数组和', () => {
  describe('暴力解法', () => {
    testCase(maxSubArray);
  });

  describe('动态规划', () => {
    testCase(maxSubArray2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const expected = 6;

    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [1];
    const expected = 1;

    expect(fn(nums)).toBe(expected);
  });

  it('示例三', () => {
    const nums = [5, 4, -1, 7, 8];
    const expected = 23;

    expect(fn(nums)).toBe(expected);
  });
}
