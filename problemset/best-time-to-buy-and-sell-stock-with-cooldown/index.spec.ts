import { describe, expect, it } from 'vitest'
import { maxProfit } from '.'

describe('最佳买卖股票时机含冷冻期', () => {
  testCase(maxProfit)
})

function testCase(fn: (prices: number[]) => number) {
  it.each([
    [[1, 2, 3, 0, 2], 3],
    [[1], 0],
  ])('示例%#', (prices, number) => {
    expect(fn(prices)).toBe(number)
  })
}
