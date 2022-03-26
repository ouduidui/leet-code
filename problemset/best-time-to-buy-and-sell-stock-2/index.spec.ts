import { describe, expect, it } from 'vitest'
import { maxProfit, maxProfit2, maxProfit3 } from '.'

describe('买卖股票的最佳时机 II', () => {
  describe('动态规划', () => {
    testCase(maxProfit)
  })

  describe('动态规划 + 优化空间', () => {
    testCase(maxProfit2)
  })

  describe('贪心算法', () => {
    testCase(maxProfit3)
  })
})

function testCase(fn: (prices: number[]) => number) {
  it.each([
    [[7, 1, 5, 3, 6, 4], 7],
    [[1, 2, 3, 4, 5], 4],
    [[7, 6, 4, 3, 1], 0],
  ])('示例%#', (prices, expected) => {
    expect(fn(prices)).toBe(expected)
  })
}
