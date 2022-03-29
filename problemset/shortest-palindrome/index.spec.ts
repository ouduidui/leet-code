import { describe, expect, it } from 'vitest'
import { shortestPalindrome } from '.'

describe('最短回文串', () => {
  testCase(shortestPalindrome)
})

function testCase(fn: (s: string) => string) {
  it.each([
    ['aacecaaa', 'aaacecaaa'],
    ['abcd', 'dcbabcd'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
