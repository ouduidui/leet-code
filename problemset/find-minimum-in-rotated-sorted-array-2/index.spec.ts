import { findMin } from './index';

describe('寻找旋转排序数组中的最小值 II', () => {
  testCase(findMin);
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [1, 3, 5];
    const expected = 1;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [2, 2, 2, 0, 1];
    const expected = 0;
    expect(fn(nums)).toBe(expected);
  });
}
