import {
  findMedianSortedArrays,
  findMedianSortedArrays2,
  findMedianSortedArrays3
} from './index';

describe('寻找两个正序数组的中位数', () => {
  describe('暴力解法', () => {
    testCase(findMedianSortedArrays);
  });

  describe('二分法', () => {
    testCase(findMedianSortedArrays2);
  });

  describe('划分数组', () => {
    testCase(findMedianSortedArrays3);
  });
});

function testCase(fn: (nums1: number[], nums2: number[]) => number) {
  test('示例一', () => {
    const num1: Array<number> = [1, 3];
    const num2: Array<number> = [2];
    const expected = 2;

    expect(fn(num1, num2)).toBe(expected);
  });

  test('示例二', () => {
    const num1: Array<number> = [1, 2];
    const num2: Array<number> = [3, 4];
    const expected = 2.5;

    expect(fn(num1, num2)).toBe(expected);
  });

  test('示例三', () => {
    const num1: Array<number> = [0, 0];
    const num2: Array<number> = [0, 0];
    const expected = 0;

    expect(fn(num1, num2)).toBe(expected);
  });

  test('示例四', () => {
    const num1: Array<number> = [];
    const num2: Array<number> = [1];
    const expected = 1;

    expect(fn(num1, num2)).toBe(expected);
  });

  test('示例五', () => {
    const num1: Array<number> = [2];
    const num2: Array<number> = [];
    const expected = 2;

    expect(fn(num1, num2)).toBe(expected);
  });

  test('示例六', () => {
    const num1: Array<number> = [1];
    const num2: Array<number> = [1];
    const expected = 1;

    expect(fn(num1, num2)).toBe(expected);
  });

  test('示例七', () => {
    const num1: Array<number> = [1, 2, 2];
    const num2: Array<number> = [1, 2, 3];
    const expected = 2;

    expect(fn(num1, num2)).toBe(expected);
  });
}
