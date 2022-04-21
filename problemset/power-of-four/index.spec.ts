import { describe, expect, it } from 'vitest'
import { isPowerOfFour, isPowerOfFour2 } from '.'

describe('4的幂', () => {
  describe('二进制表示中 1 的位置', () => {
    testCase(isPowerOfFour)
  })

  describe('取模性质', () => {
    testCase(isPowerOfFour2)
  })
})

function testCase(fn: (n: number) => boolean) {
  it.each([
    [16, true],
    [5, false],
    [1, true],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
