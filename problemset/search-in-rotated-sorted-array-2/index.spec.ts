import { describe, expect, it } from 'vitest'
import { search } from '.'

describe('搜索旋转排序数组 II', () => {
  testCase(search)
})

function testCase(fn: (nums: number[], target: number) => boolean) {
  it.each([
    [[2, 5, 6, 0, 0, 1, 2], 0, true],
    [[2, 5, 6, 0, 0, 1, 2], 3, false],
    [[1, 0, 1, 1, 1], 0, true],
  ])('示例%#', (nums, target, expected) => {
    expect(fn(nums, target)).toBe(expected)
  })
}
