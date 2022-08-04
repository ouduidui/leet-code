import { describe, expect, it } from 'vitest'
import { minSubsequence } from '.'

describe('非递增顺序的最小子序列', () => {
  testCase(minSubsequence)
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    [
      [4, 3, 10, 9, 8],
      [10, 9],
    ],
    [
      [4, 4, 7, 6, 7],
      [7, 7, 6],
    ],
    [
      [6],
      [6],
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected)
  })
}
