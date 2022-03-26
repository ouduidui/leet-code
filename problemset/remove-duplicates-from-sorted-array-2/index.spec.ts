import { removeDuplicates } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('删除有序数组中的重复项 II', () => {
  testCase(removeDuplicates);
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const res = fn(nums);
    expect(res).toBe(5);
    expect(nums).toStrictEqual([1, 1, 2, 2, 3]);
  });

  it('示例一', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const res = fn(nums);
    expect(res).toBe(7);
    expect(nums).toStrictEqual([0, 0, 1, 1, 2, 3, 3]);
  });
}
