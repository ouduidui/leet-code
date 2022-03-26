import { describe, expect, it } from 'vitest'
import { minimumDifference } from '.'

describe('学生分数的最小差值', () => {
  testCase(minimumDifference)
})

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    [[90], 1, 0],
    [[9, 4, 1, 7], 2, 2],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
