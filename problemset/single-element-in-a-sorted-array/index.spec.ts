import { describe, expect, it } from 'vitest'
import {
  singleNonDuplicate,
  singleNonDuplicate2,
  singleNonDuplicate3,
} from '.'

describe('有序数组中的单一元素', () => {
  describe('暴力解法', () => {
    testCase(singleNonDuplicate)
  })

  describe('全数组的二分查找', () => {
    testCase(singleNonDuplicate2)
  })

  describe('偶数下标的二分查找', () => {
    testCase(singleNonDuplicate3)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[1, 1, 2, 3, 3, 4, 4, 8, 8], 2],
    [[3, 3, 7, 7, 10, 11, 11], 10],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
