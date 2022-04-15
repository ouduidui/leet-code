import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '.'

describe('删除有序数组中的重复项', () => {
  describe('双指针', () => {
    testCase(removeDuplicates)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[1, 1, 2], 2, [1, 2]],
    [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5, [0, 1, 2, 3, 4]],
  ])('示例%#', (nums, expected, expectedNums) => {
    expect(fn(nums)).toBe(expected)
    expect(nums).toEqual(expectedNums)
  })
}
