import { describe, expect, it } from 'vitest'
import { atMostNGivenDigitSet, atMostNGivenDigitSet2 } from '.'

describe('最大为 N 的数字组合', () => {
  describe('数位动态规划', () => testCase(atMostNGivenDigitSet))
  describe('数学', () => testCase(atMostNGivenDigitSet2))
})

function testCase(fn: typeof atMostNGivenDigitSet) {
  it.each([
    [
      ['1', '3', '5', '7'], 100, 20,
    ],
    [
      ['1', '4', '9'], 1000000000, 29523,
    ],
    [
      ['7'], 8, 1,
    ],
  ])('示例%#', (digits, n, expected) => {
    expect(fn(digits, n)).toBe(expected)
  })
}
