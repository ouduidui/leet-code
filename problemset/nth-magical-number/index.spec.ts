import { describe, expect, it } from 'vitest'
import { nthMagicalNumber } from '.'

describe('第 N 个神奇数字', () => {
  testCase(nthMagicalNumber)
})

function testCase(fn: (n: number, a: number, b: number) => number) {
  it.each([
    [1, 2, 3, 2],
    [4, 2, 3, 6],
  ])('示例%#', (n, a, b, expected) => {
    expect(fn(n, a, b)).toBe(expected)
  })
}
