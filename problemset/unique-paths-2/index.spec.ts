import { describe, expect, it } from 'vitest'
import { uniquePathsWithObstacles, uniquePathsWithObstacles2 } from '.'

describe('不同路径 II', () => {
  describe('动态规划', () => {
    testCase(uniquePathsWithObstacles)
  })

  describe('动态规划 + 滚动数组', () => {
    testCase(uniquePathsWithObstacles2)
  })
})

function testCase(fn: (obstacleGrid: number[][]) => number) {
  it.each([
    [
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
      2,
    ],
    [
      [
        [0, 1],
        [0, 0],
      ],
      1,
    ],
  ])('示例%#', (obstacleGrid, expected) => {
    expect(fn(obstacleGrid)).toBe(expected)
  })
}
