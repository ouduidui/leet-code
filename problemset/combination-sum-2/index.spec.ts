import { describe, it } from 'vitest'
import { combinationSum2 } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'

describe(' 组合总和 II', () => {
  testCase(combinationSum2)
})

function testCase(fn: (candidates: number[], target: number) => number[][]) {
  it.each([
    [
      [10, 1, 2, 7, 6, 1, 5],
      8,
      [
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6],
      ],
    ],
    [[2, 5, 2, 1, 2], 5, [[1, 2, 2], [5]]],
    [
      [3, 1, 3, 5, 1, 1],
      8,
      [
        [1, 1, 1, 5],
        [1, 1, 3, 3],
        [3, 5],
      ],
    ],
  ])('示例%#', (candidates, target, expected) => {
    twoDimensionalArrayEqual(fn(candidates, target), expected)
  })
}
