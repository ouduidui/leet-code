import { twoSum, twoSum2 } from './index';

describe('两数之和', () => {
  describe('暴力解法', () => {
    testCase(twoSum);
  });
  describe('哈希表', () => {
    testCase(twoSum2);
  });
});

function testCase(fn: (nums: number[], target: number) => number[]) {
  test('示例一', () => {
    const nums: number[] = [2, 7, 11, 15];
    const target = 9;
    const expected: number[] = [0, 1];

    expect(fn(nums, target)).toEqual(expected);
  });

  test('示例二', () => {
    const nums: number[] = [3, 2, 4];
    const target = 6;
    const expected: number[] = [1, 2];

    expect(fn(nums, target)).toEqual(expected);
  });

  test('示例三', () => {
    const nums: number[] = [3, 3];
    const target = 6;
    const expected: number[] = [0, 1];

    expect(fn(nums, target)).toEqual(expected);
  });
}
