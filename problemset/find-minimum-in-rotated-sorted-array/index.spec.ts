import { findMin } from './index';

describe('寻找旋转排序数组中的最小值', () => {
  testCase(findMin);
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [3, 4, 5, 1, 2];
    const expected = 1;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const expected = 0;
    expect(fn(nums)).toBe(expected);
  });

  it('示例三', () => {
    const nums = [11, 13, 15, 17];
    const expected = 11;
    expect(fn(nums)).toBe(expected);
  });
}
