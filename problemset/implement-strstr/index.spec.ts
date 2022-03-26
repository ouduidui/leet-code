import { describe, expect, it } from 'vitest'
import { strStr, strStr2 } from '.'
// need refactor
describe('实现strStr()', () => {
  describe('暴力解法', () => {
    testCase(strStr)
  })

  describe('KMP解法', () => {
    testCase(strStr2)
  })
})

function testCase(fn: (haystack: string, needle: string) => number) {
  it('示例一', () => {
    const haystack = 'hello'
    const needle = 'll'
    const expected = 2

    expect(fn(haystack, needle)).toBe(expected)
  })

  it('示例二', () => {
    const haystack = 'aaaaa'
    const needle = 'bba'
    const expected = -1

    expect(fn(haystack, needle)).toBe(expected)
  })

  it('示例三', () => {
    const haystack = ''
    const needle = ''
    const expected = 0

    expect(fn(haystack, needle)).toBe(expected)
  })
}
