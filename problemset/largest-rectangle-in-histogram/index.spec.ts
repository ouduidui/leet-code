import { describe, expect, it } from 'vitest'
import {
  largestRectangleArea,
  largestRectangleArea1,
  largestRectangleArea2,
} from '.'

describe('柱状图中最大的矩形', () => {
  describe('暴力解法 - 遍历所有矩形', () => {
    testCase(largestRectangleArea)
  })
  describe('暴力解法 - 固定高度', () => {
    testCase(largestRectangleArea1)
  })
  describe('单调栈', () => {
    testCase(largestRectangleArea2)
  })
})

function testCase(fn: (heights: number[]) => number) {
  it.each([
    [
      [2, 1, 5, 6, 2, 3],
      10,
    ],
    [
      [2, 4],
      4,
    ],
  ])('示例%#', (heights, expected) => {
    expect(fn(heights)).toBe(expected)
  })
}
