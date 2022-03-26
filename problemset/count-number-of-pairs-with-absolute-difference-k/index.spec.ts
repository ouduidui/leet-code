import { describe, expect, it } from 'vitest'
import { countKDifference, countKDifference2 } from '.'

describe('差的绝对值为 K 的数对数目', () => {
  describe('暴力解法', () => {
    testCase(countKDifference)
  })

  describe('哈希表', () => {
    testCase(countKDifference2)
  })
})

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    [[1, 2, 2, 1], 1, 4],
    [[1, 3], 3, 0],
    [[3, 2, 1, 5, 4], 2, 3],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
