import { describe, expect, it } from 'vitest'
import { nthUglyNumber, nthUglyNumber2 } from '.'

describe('丑数 II', () => {
  describe('优先队列', () => {
    testCase(nthUglyNumber)
  })

  describe('动态规划', () => {
    testCase(nthUglyNumber2)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    [10, 12],
    [1, 1],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
