import { describe, expect, it } from 'vitest'
import { isPowerOfThree } from '.'

describe('3的幂', () => {
  describe('试除法', () => {
    testCase(isPowerOfThree)
  })

  describe('判断是否为最大 3 的幂的约数', () => {
    testCase(isPowerOfThree)
  })
})

function testCase(fn: (n: number) => boolean) {
  it.each([
    [27, true],
    [0, false],
    [9, true],
    [45, false],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
