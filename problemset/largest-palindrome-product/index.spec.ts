import { describe, expect, it } from 'vitest'
import { largestPalindrome } from '.'

describe('最大回文数乘积', () => {
  testCase(largestPalindrome)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [2, 987],
    [1, 9],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
