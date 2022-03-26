import { describe, it } from 'vitest'
import { threeSum } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'

describe('三数之和', () => {
  describe('暴力解法', () => {
    testCase(threeSum)
  })
})

function testCase(fn: (nums: number[]) => number[][]) {
  it.each([
    [
      [-1, 0, 1, 2, -1, -4],
      [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    ],
    [[], []],
    [[0], []],
    [
      [0, 3, 0, 1, 1, -1, -5, -5, 3, -3, -3, 0],
      [
        [-3, 0, 3],
        [-1, 0, 1],
        [0, 0, 0],
      ],
    ],
  ])('示例%#', (nums, expected) => {
    twoDimensionalArrayEqual(fn(nums), expected)
  })
}
