import { describe, expect, it } from 'vitest'
import { countPalindromicSubsequences } from '.'

describe('统计不同回文子序列', () => {
  testCase(countPalindromicSubsequences)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['bccb', 6],
    ['abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba', 104860361],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
