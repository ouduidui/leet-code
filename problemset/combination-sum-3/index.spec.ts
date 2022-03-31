import { describe, it } from 'vitest'
import { combinationSum3 } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'

describe('组合总和 III', () => {
  describe('回溯', () => {
    testCase(combinationSum3)
  })
})

function testCase(fn: (k: number, n: number) => number[][]) {
  it.each([
    [3, 7, [[1, 2, 4]]],
    [3, 9, [[1, 2, 6], [1, 3, 5], [2, 3, 4]]],
    [4, 1, []],
  ])('示例%#', (k, n, expected) => {
    twoDimensionalArrayEqual(fn(k, n), expected)
  })
}
