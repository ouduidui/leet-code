import { describe, expect, it } from 'vitest'
import { numSubarrayProductLessThanK } from '.'

describe('乘积小于 K 的子数组', () => {
  testCase(numSubarrayProductLessThanK)
})

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    [[10, 5, 2, 6], 100, 8],
    [[1, 2, 3], 0, 0],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
