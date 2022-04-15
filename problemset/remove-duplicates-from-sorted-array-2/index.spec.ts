import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '.'

describe('删除有序数组中的重复项 II', () => {
  testCase(removeDuplicates)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[1, 1, 1, 2, 2, 3], [1, 1, 2, 2, 3], 5],
    [[0, 0, 1, 1, 1, 1, 2, 3, 3], [0, 0, 1, 1, 2, 3, 3], 7],
  ])('示例%#', (nums, expectedNums, expected) => {
    const res = fn(nums)
    expect(res).toBe(expected)
    expect(nums).toStrictEqual(expectedNums)
  })
}
