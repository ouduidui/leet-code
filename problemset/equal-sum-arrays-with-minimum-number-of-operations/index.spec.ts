import { describe, expect, it } from 'vitest'
import { minOperations } from '.'

describe('通过最少操作次数使数组的和相等', () => {
  testCase(minOperations)
})

function testCase(fn: (nums1: number[], nums2: number[]) => number) {
  it.each([
    [[1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2], 3],
    [[1, 1, 1, 1, 1, 1, 1], [6], -1],
    [[6, 6], [1], 3],
  ])('示例%#', (nums1, nums2, expected) => {
    expect(fn(nums1, nums2)).toBe(expected)
  })
}
