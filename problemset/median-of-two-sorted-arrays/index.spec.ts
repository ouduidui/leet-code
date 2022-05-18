import { describe, expect, it } from 'vitest'
import {
  findMedianSortedArrays,
  findMedianSortedArrays2,
  findMedianSortedArrays3,
} from '.'

describe('寻找两个正序数组的中位数', () => {
  describe('暴力解法', () => {
    testCase(findMedianSortedArrays)
  })

  describe('二分法', () => {
    testCase(findMedianSortedArrays2)
  })

  describe('划分数组', () => {
    testCase(findMedianSortedArrays3)
  })
})

function testCase(fn: (nums1: number[], nums2: number[]) => number) {
  it.each([
    [[1, 3], [2], 2],
    [[1, 2], [3, 4], 2.5],
    [[0, 0], [0, 0], 0],
    [[], [1], 1],
    [[2], [], 2],
    [[1], [1], 1],
    [[1, 2, 2], [1, 2, 3], 2],
  ])('示例%#', (num1, num2, expected) => {
    expect(fn(num1, num2)).toBe(expected)
  })
}
