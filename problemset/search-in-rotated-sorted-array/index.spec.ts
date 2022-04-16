import { describe, expect, it } from 'vitest'
import { search, search2 } from '.'

describe('搜索旋转排序数组', () => {
  describe('暴力解法', () => {
    testCase(search)
  })

  describe('二分法', () => {
    testCase(search2)
  })
})

function testCase(fn: (nums: number[], target: number) => number) {
  it.each([
    [[4, 5, 6, 7, 0, 1, 2], 0, 4],
    [[4, 5, 6, 7, 0, 1, 2], 3, -1],
    [[1], 0, -1],
    [[1, 3], 1, 0],
  ])('示例%#', (nums, target, expected) => {
    expect(fn(nums, target)).toBe(expected)
  })
}
