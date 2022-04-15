import { describe, it } from 'vitest'
import { permuteUnique } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'

describe('全排列 II', () => {
  testCase(permuteUnique)
})

function testCase(fn: (nums: number[]) => number[][]) {
  it.each([
    [
      [1, 1, 2],
      [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
      ],
    ],
    [
      [1, 2, 3],
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    ],
  ])('示例%#', (nums, expected) => {
    twoDimensionalArrayEqual(fn(nums), expected)
  })
}
