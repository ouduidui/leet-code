import { longestConsecutive } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('最长连续序列', () => {
  testCase(longestConsecutive);
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [100, 4, 200, 1, 3, 2];
    const expected = 4;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    const expected = 9;
    expect(fn(nums)).toBe(expected);
  });
}
