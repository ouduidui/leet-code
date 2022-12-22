import { describe, expect, it } from 'vitest'
import { maxScore } from '.'

describe('N 次操作后的最大分数和', () => {
  testCase(maxScore)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[1, 2], 1],
    [[3, 4, 6, 8], 11],
    [[1, 2, 3, 4, 5, 6], 14],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
