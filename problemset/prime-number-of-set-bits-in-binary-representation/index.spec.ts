import { describe, expect, it } from 'vitest'
import { countPrimeSetBits, countPrimeSetBits2 } from '.'

describe('二进制表示中质数个计算置位', () => {
  describe('数学 + 位运算', () => {
    testCase(countPrimeSetBits)
  })

  describe('判断质数优化', () => {
    testCase(countPrimeSetBits2)
  })
})

function testCase(fn: (left: number, right: number) => number) {
  it.each([
    [6, 10, 4],
    [10, 15, 5],
  ])('示例%#', (left, right, expected) => {
    expect(fn(left, right)).toBe(expected)
  })
}
