import { describe, expect, it } from 'vitest'
import { countNumbersWithUniqueDigits } from '.'

describe('统计各位数字都不同的数字个数', () => {
  testCase(countNumbersWithUniqueDigits)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [2, 91],
    [0, 1],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
