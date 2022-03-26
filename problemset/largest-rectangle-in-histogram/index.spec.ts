import {
  largestRectangleArea,
  largestRectangleArea1,
  largestRectangleArea2
} from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('柱状图中最大的矩形', () => {
  describe('暴力解法 - 遍历所有矩形', () => {
    testCase(largestRectangleArea);
  });
  describe('暴力解法 - 固定高度', () => {
    testCase(largestRectangleArea1);
  });
  describe('单调栈', () => {
    testCase(largestRectangleArea2);
  });
});

function testCase(fn: (heights: number[]) => number) {
  it('示例一', () => {
    const heights = [2, 1, 5, 6, 2, 3];
    const expected = 10;
    expect(fn(heights)).toBe(expected);
  });

  it('示例二', () => {
    const heights = [2, 4];
    const expected = 4;
    expect(fn(heights)).toBe(expected);
  });
}
