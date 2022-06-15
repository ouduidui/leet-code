import { describe, expect, it } from 'vitest'
import { smallestDistancePair, smallestDistancePair2 } from '.'

describe('找出第 K 小的数对距离', () => {
  describe('排序 + 二分查找', () => {
    testCase(smallestDistancePair)
  })

  describe('排序 + 二分查找 + 双指针', () => {
    testCase(smallestDistancePair2)
  })
})

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    [
      [1, 3, 1],
      1,
      0,
    ],
    [
      [1, 1, 1],
      2,
      0,
    ],
    [
      [1, 6, 1],
      3,
      5,
    ],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
