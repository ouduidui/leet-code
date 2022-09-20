import { describe, expect, it } from 'vitest'
import { canPartitionKSubsets } from '.'

describe('划分为k个相等的子集', () => {
  testCase(canPartitionKSubsets)
})

function testCase(fn: (nums: number[], k: number) => boolean) {
  it.each([
    [
      [4, 3, 2, 3, 5, 2, 1],
      4,
      true,
    ],
    [
      [1, 2, 3, 4],
      3,
      false,
    ],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
