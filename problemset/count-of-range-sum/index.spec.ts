import { describe, expect, it } from 'vitest'
import { countRangeSum, countRangeSum2 } from '.'

describe('区间和的个数', () => {
  describe('暴力解法', () => {
    testCase(countRangeSum)
  })

  describe('归并排序', () => {
    testCase(countRangeSum2)
  })
})

function testCase(fn: (nums: number[], lower: number, upper: number) => number) {
  it.each([
    [[-2, 5, -1], -2, 2, 3],
    [[0], 0, 0, 1],
  ])('示例%#', (nums, lower, upper, expected) => {
    expect(fn(nums, lower, upper)).toBe(expected)
  })
}
