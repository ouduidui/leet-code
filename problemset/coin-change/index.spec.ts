import { describe, expect, it } from 'vitest'
import { coinChange, coinChange2 } from '.'

describe('零钱兑换', () => {
  describe('深度优先搜索 + 记忆化搜索', () => {
    testCase(coinChange)
  })

  describe('动态规划', () => {
    testCase(coinChange2)
  })
})

function testCase(fn: (coins: number[], amount: number) => number) {
  it.each([
    [[1, 2, 5], 11, 3],
    [[2], 3, -1],
    [[1], 0, 0],
  ])('示例%#', (coins, amount, expected) => {
    expect(fn(coins, amount)).toBe(expected)
  })
}
