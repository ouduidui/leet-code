import { describe, expect, it } from 'vitest'
import { reverseBits, reverseBits2 } from '.'

describe('颠倒二进制位', () => {
  describe('逐位颠倒', () => {
    testCase(reverseBits)
  })

  describe('位运算分治', () => {
    testCase(reverseBits2)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    [0b00000010100101000001111010011100, 0b00111001011110000010100101000000],
    [0b11111111111111111111111111111101, 0b10111111111111111111111111111111],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
