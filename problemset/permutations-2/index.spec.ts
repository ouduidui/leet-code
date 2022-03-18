import { permuteUnique } from './index';
import { twoDimensionalArrayEqual } from '~/utils/tools';

describe('全排列 II', () => {
  testCase(permuteUnique);
});

function testCase(fn: (nums: number[]) => number[][]) {
  it('示例一', () => {
    const nums = [1, 1, 2];
    const expected = [
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1]
    ];

    twoDimensionalArrayEqual(fn(nums) as number[][], expected);
  });

  it('示例二', () => {
    const nums = [1, 2, 3];
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ];

    twoDimensionalArrayEqual(fn(nums) as number[][], expected);
  });
}
