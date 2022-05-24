import { describe, expect, it } from 'vitest'
import { minPathSum } from '.'

describe('最小路径和', () => {
  describe('动态规划', () => {
    testCase(minPathSum)
  })
})

function testCase(fn: (grid: number[][]) => number) {
  it.each([
    [
      [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ],
      7,
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      12,
    ],
  ])('示例%#', (grid, expected) => {
    expect(fn(grid)).toBe(expected)
  })
}
