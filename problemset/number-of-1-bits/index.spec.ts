import { describe, expect, it } from 'vitest'
import { hammingWeight, hammingWeight2 } from '.'

describe('位1的个数', () => {
  describe('循环检查二进制位', () => {
    testCase(hammingWeight)
  })

  describe('位运算优化', () => {
    testCase(hammingWeight2)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    [0b00000000000000000000000000001011, 3],
    [0b00000000000000000000000010000000, 1],
    [0b11111111111111111111111111111101, 31],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
