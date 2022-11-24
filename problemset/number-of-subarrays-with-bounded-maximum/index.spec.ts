import { describe, expect, it } from 'vitest'
import { numSubarrayBoundedMax } from '.'

describe('区间子数组个数', () => {
  testCase(numSubarrayBoundedMax)
})

function testCase(fn: (nums: number[], left: number, right: number) => number) {
  it.each([
    [[2, 1, 4, 3], 2, 3, 3],
    [[2, 9, 2, 5, 6], 2, 8, 7],
  ])('示例%#', (nums, left, right, expected) => {
    expect(fn(nums, left, right)).toBe(expected)
  })
}
