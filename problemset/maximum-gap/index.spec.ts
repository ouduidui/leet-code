import { maximumGap, maximumGap2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('最大间距', () => {
  describe('基数排序', () => {
    testCase(maximumGap);
  });

  describe('基于桶的算法', () => {
    testCase(maximumGap2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [3, 6, 9, 1];
    const expected = 3;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [10];
    const expected = 0;
    expect(fn(nums)).toBe(expected);
  });

  it('示例三', () => {
    const nums = [1, 3, 100];
    const expected = 97;
    expect(fn(nums)).toBe(expected);
  });
}
