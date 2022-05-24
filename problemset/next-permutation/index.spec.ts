import { describe, expect, it } from 'vitest'
import { nextPermutation } from '.'

describe('下一个排列', () => {
  describe('两遍扫描', () => {
    testCase(nextPermutation)
  })
})

function testCase(fn: (nums: number[]) => void) {
  it.each([
    [
      [1, 2, 3],
      [1, 3, 2],
    ],
    [
      [3, 2, 1],
      [1, 2, 3],
    ],
    [
      [1, 1, 5],
      [1, 5, 1],
    ],
    [
      [1],
      [1],
    ],
  ])('示例%#', (nums, expected) => {
    fn(nums)
    expect(nums).toStrictEqual(expected)
  })
}
