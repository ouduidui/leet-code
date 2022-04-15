import { describe, expect, it } from 'vitest'
import { searchInsert } from '.'

describe('搜索插入位置', () => {
  describe('二分法', () => {
    testCase(searchInsert)
  })
})

function testCase(fn: (nums: number[], target: number) => number) {
  it.each([
    [[1, 3, 5, 6], 5, 2],
    [[1, 3, 5, 6], 2, 1],
    [[1, 3, 5, 6], 7, 4],
    [[1, 3, 5, 6], 0, 0],
    [[1], 0, 0],
  ])('示例%#', (nums, target, expected) => {
    expect(fn(nums, target)).toBe(expected)
  })
}
