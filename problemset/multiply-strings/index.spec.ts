import { describe, expect, it } from 'vitest'
import { multiply } from '.'

describe('字符串相乘', () => {
  describe('做乘法', () => {
    testCase(multiply)
  })
})

function testCase(fn: (num1: string, num2: string) => string) {
  it.each([
    ['2', '3', '6'],
    ['123', '456', '56088'],
  ])('示例%#', (num1, num2, expected) => {
    expect(fn(num1, num2)).toBe(expected)
  })
}
