import { describe, expect, it } from 'vitest'
import { trailingZeroes, trailingZeroes2, trailingZeroes3 } from '.'

describe('阶乘后的零', () => {
  describe('计算阶乘', () => {
    testCase(trailingZeroes)
  })

  describe('计算因子5', () => {
    testCase(trailingZeroes2)
  })

  describe('高效的计算因子5', () => {
    testCase(trailingZeroes3)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    [3, 0],
    [5, 1],
    [0, 0],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
