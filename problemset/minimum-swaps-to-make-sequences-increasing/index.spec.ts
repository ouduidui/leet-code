import { describe, expect, it } from 'vitest'
import { minSwap } from '.'

describe('使序列递增的最小交换次数', () => {
  testCase(minSwap)
})

function testCase(fn: (nums1: number[], nums2: number[]) => number) {
  it.each([
    [[1, 3, 5, 4], [1, 2, 3, 7], 1],
    [[0, 3, 5, 8, 9], [2, 1, 4, 6, 9], 1],
  ])('示例%#', (nums1, nums2, expected) => {
    expect(fn(nums1, nums2)).toBe(expected)
  })
}
