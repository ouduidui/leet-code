import { describe, expect, it } from 'vitest'
import { findKthLargest, findKthLargest2 } from '.'

describe('数组中的第k个最大元素', () => {
  describe('暴力解法', () => {
    testCase(findKthLargest)
  })

  describe('快速排序', () => {
    testCase(findKthLargest2)
  })
})

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    [[3, 2, 1, 5, 6, 4], 2, 5],
    [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4, 4],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
