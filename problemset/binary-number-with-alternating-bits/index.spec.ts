import { describe, expect, it } from 'vitest'
import { hasAlternatingBits, hasAlternatingBits2 } from '.'

describe('交替位二进制数', () => {
  describe('模拟', () => {
    testCase(hasAlternatingBits)
  })

  describe('位运算', () => {
    testCase(hasAlternatingBits2)
  })
})

function testCase(fn: (n: number) => boolean) {
  it.each([
    [5, true],
    [7, false],
    [11, false],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
