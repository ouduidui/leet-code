import { describe, expect, it } from 'vitest'
import { findPairs } from '.'

describe('数组中的 k-diff 数对', () => {
  testCase(findPairs)
})

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    [
      [3, 1, 4, 1, 5],
      2,
      2,
    ],
    [
      [1, 2, 3, 4, 5],
      1,
      4,
    ],
    [
      [1, 3, 1, 5, 4],
      0,
      1,
    ],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
