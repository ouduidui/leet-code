import { describe, expect, it } from 'vitest'
import { minimumTotal, minimumTotal2 } from '.'

describe('三角形最小路径和', () => {
  describe('动态规划', () => {
    testCase(minimumTotal)
  })

  describe('动态规划 + 空间优化', () => {
    testCase(minimumTotal2)
  })
})

function testCase(fn: (triangle: number[][]) => number) {
  it.each([
    [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]], 11],
    [[[-10]], -10],
    [[[-1], [2, 3], [1, -1, -3]], -1],
  ])('示例%#', (triangle, expected) => {
    expect(fn(triangle)).toBe(expected)
  })
}
