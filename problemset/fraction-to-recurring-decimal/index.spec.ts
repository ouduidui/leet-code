import { describe, expect, it } from 'vitest'
import { fractionToDecimal } from '.'

describe('分数到小数', () => {
  testCase(fractionToDecimal)
})

function testCase(fn: (numerator: number, denominator: number) => string) {
  it.each([
    [1, 2, '0.5'],
    [2, 1, '2'],
    [2, 3, '0.(6)'],
    [4, 333, '0.(012)'],
    [1, 5, '0.2'],
    [-2147483648, -1, '2147483648'],
  ])('示例%#', (numerator, denominator, expected) => {
    expect(fn(numerator, denominator)).toBe(expected)
  })
}
