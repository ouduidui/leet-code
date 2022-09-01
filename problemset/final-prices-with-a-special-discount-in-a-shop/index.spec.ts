import { describe, expect, it } from 'vitest'
import { finalPrices } from '.'

describe('商品折扣后的最终价格', () => {
  testCase(finalPrices)
})

function testCase(fn: (prices: number[]) => number[]) {
  it.each([
    [
      [8, 4, 6, 2, 3],
      [4, 2, 4, 2, 3],
    ],
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ],
    [
      [10, 1, 1, 6],
      [9, 0, 1, 6],
    ],
  ])('示例%#', (prices, expected) => {
    expect(fn(prices)).toStrictEqual(expected)
  })
}
