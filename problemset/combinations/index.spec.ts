import { describe, it } from 'vitest'
import { combine } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'

describe('组合', () => {
  testCase(combine)
})

function testCase(fn: (n: number, k: number) => number[][]) {
  it.each([
    [
      4,
      2,
      [
        [2, 4],
        [3, 4],
        [2, 3],
        [1, 2],
        [1, 3],
        [1, 4],
      ],
    ],
    [1, 1, [[1]]],
  ])('示例%#', (n, k, expected) => {
    twoDimensionalArrayEqual(fn(n, k), expected)
  })
}
