import { describe, expect, it } from 'vitest'
import { isPalindrome, isPalindrome1 } from '.'

describe('回文数', () => {
  describe('暴力解法', () => {
    testCase(isPalindrome)
  })

  describe('反转一半数字', () => {
    testCase(isPalindrome1)
  })
})

function testCase(fn: (x: number) => boolean) {
  it.each([
    [121, true],
    [-121, false],
    [10, false],
    [-101, false],
  ])('示例%#', (x, expected) => {
    expect(fn(x)).toBe(expected)
  })
}
