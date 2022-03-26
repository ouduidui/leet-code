import { describe, expect, it } from 'vitest'
import { maxProfit, maxProfit2 } from '.'

describe('买卖股票的最佳时机', () => {
  describe('暴力解法', () => {
    testCase(maxProfit)
  })

  describe('一次遍历', () => {
    testCase(maxProfit2)
  })
})

function testCase(fn: (prices: number[]) => number) {
  it.each([
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
  ])('示例%#', (prices, expected) => {
    expect(fn(prices)).toBe(expected)
  })
}
