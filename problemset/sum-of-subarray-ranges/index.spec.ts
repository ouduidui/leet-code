import { subArrayRanges, subArrayRanges2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';

describe('子数组范围和', () => {
  describe('遍历', () => {
    testCase(subArrayRanges);
  });

  describe('单调栈', () => {
    testCase(subArrayRanges2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [1, 2, 3];
    const expected = 4;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [1, 3, 3];
    const expected = 4;
    expect(fn(nums)).toBe(expected);
  });

  it('示例三', () => {
    const nums = [4, -2, -3, 4, 1];
    const expected = 59;
    expect(fn(nums)).toBe(expected);
  });
}
