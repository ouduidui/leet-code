import { describe, expect, it } from 'vitest'
import { climbStairs, climbStairs2 } from '.'

describe('爬楼梯', () => {
  describe('动态规划 - 滑动数组', () => {
    testCase(climbStairs)
  })

  describe('矩阵快速幂', () => {
    testCase(climbStairs2)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    [2, 2],
    [3, 3],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
