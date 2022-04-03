import { describe, expect, it } from 'vitest'
import { maximalSquare, maximalSquare2 } from '.'

describe('最大正方形', () => {
  describe('暴力解法', () => {
    testCase(maximalSquare)
  })

  describe('动态规划', () => {
    testCase(maximalSquare2)
  })
})

function testCase(fn: (matrix: string[][]) => number) {
  it.each([
    [
      [
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ],
      4,
    ],
    [
      [
        ['0', '1'],
        ['1', '0'],
      ],
      1,
    ],
    [
      [
        ['0'],
      ],
      0,
    ],
  ])('示例%#', (matrix, expected) => {
    expect(fn(matrix)).toBe(expected)
  })
}
