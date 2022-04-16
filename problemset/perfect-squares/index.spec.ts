import { describe, expect, it } from 'vitest'
import { numSquares, numSquares2 } from '.'

describe('完全平方数', () => {
  describe('动态规划', () => {
    testCase(numSquares)
  })

  describe('数学', () => {
    testCase(numSquares2)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    [12, 3],
    [13, 2],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
