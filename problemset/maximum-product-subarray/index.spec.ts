import { describe, expect, it } from 'vitest'
import { maxProduct, maxProduct2 } from '.'

describe('乘积最大子数组', () => {
  describe('暴力解法', () => {
    testCase(maxProduct)
  })

  describe('动态规划', () => {
    testCase(maxProduct2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[2, 3, -2, 4], 6],
    [[-2, 0, -1], 0],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
