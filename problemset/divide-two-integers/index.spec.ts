import { describe, expect, it } from 'vitest'
import { divide, divide2 } from '.'

describe('两数相除', () => {
  describe('二分法', () => {
    testCase(divide)
  })
  describe('类二分法', () => {
    testCase(divide2)
  })
})

function testCase(fn: (dividend: number, divisor: number) => number) {
  it.each([
    [10, 3, 3],
    [7, -3, -2],
  ])('示例%#', (dividend, divisor, expected) => {
    expect(fn(dividend, divisor)).toBe(expected)
  })
}
