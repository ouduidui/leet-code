import { describe, expect, it } from 'vitest'
import { searchRange } from '.'

describe('在排序数组中查找元素的第一个和最后一个位置', () => {
  describe('二分法', () => {
    testCase(searchRange)
  })
})

function testCase(fn: (nums: number[], target: number) => number[]) {
  it.each([
    [[5, 7, 7, 8, 8, 10], 8, [3, 4]],
    [[5, 7, 7, 8, 8, 10], 6, [-1, -1]],
    [[], 0, [-1, -1]],
  ])('示例%#', (nums, target, expected) => {
    expect(fn(nums, target)).toEqual(expected)
  })
}
