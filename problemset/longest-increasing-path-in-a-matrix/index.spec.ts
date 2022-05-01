import { describe, expect, it } from 'vitest'
import { longestIncreasingPath, longestIncreasingPath2 } from '.'

describe('矩阵中的最长递增路径', () => {
  describe('记忆化深度优先搜索', () => {
    testCase(longestIncreasingPath)
  })

  describe('记忆化深度优先搜索', () => {
    testCase(longestIncreasingPath2)
  })
})

function testCase(fn: (matrix: number[][]) => number) {
  it.each([
    [[[9, 9, 4], [6, 6, 8], [2, 1, 1]], 4],
    [[[3, 4, 5], [3, 2, 6], [2, 2, 1]], 4],
    [[[1]], 1],
  ])('示例%#', (matrix, expected) => {
    expect(fn(matrix)).toBe(expected)
  })
}
