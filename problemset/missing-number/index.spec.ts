import { describe, expect, it } from 'vitest'
import { missingNumber, missingNumber2, missingNumber3, missingNumber4 } from '.'

describe('丢失的数字', () => {
  describe('排序', () => {
    testCase(missingNumber)
  })

  describe('哈希集合', () => {
    testCase(missingNumber2)
  })

  describe('位运算', () => {
    testCase(missingNumber3)
  })

  describe('数学', () => {
    testCase(missingNumber4)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[3, 0, 1], 2],
    [[0, 1], 2],
    [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
