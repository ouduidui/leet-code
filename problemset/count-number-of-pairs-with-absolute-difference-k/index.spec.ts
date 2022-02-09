import { countKDifference, countKDifference2 } from './index';

describe('差的绝对值为 K 的数对数目', () => {
  describe('暴力解法', function () {
    testCase(countKDifference);
  });

  describe('哈希表', function () {
    testCase(countKDifference2);
  });
});

function testCase(fn: (nums: number[], k: number) => number) {
  it('示例一', () => {
    const nums = [1, 2, 2, 1];
    const k = 1;
    const expected = 4;
    expect(fn(nums, k)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [1, 3];
    const k = 3;
    const expected = 0;
    expect(fn(nums, k)).toBe(expected);
  });

  it('示例三', () => {
    const nums = [3, 2, 1, 5, 4];
    const k = 2;
    const expected = 3;
    expect(fn(nums, k)).toBe(expected);
  });
}
