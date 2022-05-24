import { describe, expect, it } from 'vitest'
import { subArrayRanges, subArrayRanges2 } from '.'

describe('子数组范围和', () => {
  describe('遍历', () => {
    testCase(subArrayRanges)
  })

  describe('单调栈', () => {
    testCase(subArrayRanges2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [
      [1, 2, 3],
      4,
    ],
    [
      [1, 3, 3],
      4,
    ],
    [
      [4, -2, -3, 4, 1],
      59,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
