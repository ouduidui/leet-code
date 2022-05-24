import { describe, expect, it } from 'vitest'
import { maximumDifference, maximumDifference2 } from '.'

describe('增量元素之间的最大差值', () => {
  describe('暴力解法', () => {
    testCase(maximumDifference)
  })

  describe('前缀最小值', () => {
    testCase(maximumDifference2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [
      [7, 1, 5, 4],
      4,
    ],
    [
      [9, 4, 3, 2],
      -1,
    ],
    [
      [1, 5, 2, 10],
      9,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
