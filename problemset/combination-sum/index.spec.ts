import { describe, it } from 'vitest'
import { combinationSum, combinationSum2 } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'

describe('组合总和', () => {
  describe('回溯', () => {
    testCase(combinationSum)
  })

  describe('回溯 + 剪枝', () => {
    testCase(combinationSum2)
  })
})

function testCase(fn: (candidates: number[], target: number) => number[][]) {
  it.each([
    [[2, 3, 6, 7], 7, [[7], [2, 2, 3]]],
    [
      [2, 3, 5],
      8,
      [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ],
    ],
    [[2], 1, []],
    [[1], 1, [[1]]],
    [[1], 2, [[1, 1]]],
  ])('示例%#', (candidates, target, expected) => {
    twoDimensionalArrayEqual(fn(candidates, target), expected)
  })
}
