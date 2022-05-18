import { describe, it } from 'vitest'
import { permute } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'

describe('全排列', () => {
  testCase(permute)
})

function testCase(fn: (nums: number[]) => number[][]) {
  it.each([
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
    [
      [0, 1],
      [
        [0, 1],
        [1, 0],
      ],
    ],
  ])('示例%#', (nums, expected) => {
    twoDimensionalArrayEqual(fn(nums), expected)
  })
}
