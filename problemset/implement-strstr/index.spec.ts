import { describe, expect, it } from 'vitest'
import { strStr, strStr2 } from '.'

describe('实现strStr()', () => {
  describe('暴力解法', () => {
    testCase(strStr)
  })

  describe('KMP解法', () => {
    testCase(strStr2)
  })
})

function testCase(fn: (haystack: string, needle: string) => number) {
  it.each([
    ['hello', 'll', 2],
    ['aaaaa', 'bba', -1],
    ['', '', 0],
  ])('示例%#', (haystack, needle, expected) => {
    expect(fn(haystack, needle)).toBe(expected)
  })
}
