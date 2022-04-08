
import { describe, expect, it } from 'vitest'
import { isPowerOfTwo, isPowerOfTwo2 } from '.'

describe('2的幂', () => {
  describe('暴力计算', () => {
    testCase(isPowerOfTwo)
  })

  describe('二进制表示', () => {
    testCase(isPowerOfTwo2)
  })
})

function testCase(fn: (n: number) => boolean) {
  it.each([
    [1, true],
    [16, true],
    [3, false],
    [4, true],
    [5, false],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
