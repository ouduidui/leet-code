import { describe, expect, it } from 'vitest'
import { threeSumClosest } from '.'

describe('最接近的三数之和', () => {
  describe('排序+双指针', () => {
    testCase(threeSumClosest)
  })
})

function testCase(fn: (nums: number[], target: number) => number) {
  it.each([
    [[-1, 2, 1, -4], 1, 2],
    [[1, 1, -1, -1, 3], 1, 1],
    [[-1, 0, 1, 1, 55], 3, 2],
  ])('示例%#', (nums, target, expected) => {
    expect(fn(nums, target)).toBe(expected)
  })
}
