import {
  singleNonDuplicate,
  singleNonDuplicate2,
  singleNonDuplicate3
} from './index';

describe('有序数组中的单一元素', () => {
  describe('暴力解法', () => {
    testCase(singleNonDuplicate);
  });

  describe('全数组的二分查找', () => {
    testCase(singleNonDuplicate2);
  });

  describe('偶数下标的二分查找', () => {
    testCase(singleNonDuplicate3);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
    const expected = 2;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [3, 3, 7, 7, 10, 11, 11];
    const expected = 10;
    expect(fn(nums)).toBe(expected);
  });
}
