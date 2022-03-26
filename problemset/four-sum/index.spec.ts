import { fourSum } from '.';
import { twoDimensionalArrayEqual } from '~/utils/tools';
// need refactor
import { describe, it, expect } from 'vitest';
describe('四数之和', () => {
  describe('排序+双指针', () => {
    testCase(fourSum);
  });
});

function testCase(fn: (nums: number[], target: number) => number[][]) {
  it('示例一', () => {
    const nums: number[] = [1, 0, -1, 0, -2, 2];
    const target = 0;
    const expected: number[][] = [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1]
    ];

    twoDimensionalArrayEqual(fn(nums, target), expected);
  });

  it('示例二', () => {
    const nums: number[] = [2, 2, 2, 2, 2];
    const target = 8;
    const expected: number[][] = [[2, 2, 2, 2]];

    twoDimensionalArrayEqual(fn(nums, target), expected);
  });
}
