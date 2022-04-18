import { describe, expect, it } from 'vitest'
import { findDuplicate, findDuplicate2, findDuplicate3, findDuplicate4 } from '.'

describe('寻找重复数', () => {
  describe('暴力解法', () => {
    testCase(findDuplicate)
  })

  describe('二分查找', () => {
    testCase(findDuplicate2)
  })

  describe('二进制', () => {
    testCase(findDuplicate3)
  })

  describe('快慢指针', () => {
    testCase(findDuplicate4)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[1, 3, 4, 2, 2], 2],
    [[3, 1, 3, 4, 2], 3],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
