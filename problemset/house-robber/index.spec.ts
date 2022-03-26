import { rob, rob2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('打家劫舍', () => {
  describe('回溯', () => {
    testCase(rob);
  });
  describe('动态规划', () => {
    testCase(rob2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [1, 2, 3, 1];
    const expected = 4;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [2, 7, 9, 3, 1];
    const expected = 12;
    expect(fn(nums)).toBe(expected);
  });

  it('示例三', () => {
    const nums = [1, 2];
    const expected = 2;
    expect(fn(nums)).toBe(expected);
  });
}
