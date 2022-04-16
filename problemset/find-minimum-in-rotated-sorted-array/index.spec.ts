import { describe, expect, it } from 'vitest'
import { findMin } from '.'

describe('寻找旋转排序数组中的最小值', () => {
  testCase(findMin)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[3, 4, 5, 1, 2], 1],
    [[4, 5, 6, 7, 0, 1, 2], 0],
    [[11, 13, 15, 17], 11],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
