import { describe, expect, it } from 'vitest'
import { lengthOfLongestSubstring, lengthOfLongestSubstring2 } from '.'
// need refactor
describe('无重复字符的最长子串', () => {
  describe('暴力解法', () => {
    testCase(lengthOfLongestSubstring)
  })

  describe('滑动窗口', () => {
    testCase(lengthOfLongestSubstring2)
  })
})

function testCase(fn: (s: string) => number) {
  it('示例一', () => {
    const s = 'abcabcbb'
    const expected = 3

    expect(fn(s)).toBe(expected)
  })

  it('示例二', () => {
    const s = 'bbbbb'
    const expected = 1

    expect(fn(s)).toBe(expected)
  })

  it('示例三', () => {
    const s = 'pwwkew'
    const expected = 3

    expect(fn(s)).toBe(expected)
  })

  it('示例四', () => {
    const s = ''
    const expected = 0

    expect(fn(s)).toBe(expected)
  })

  it('示例五', () => {
    const s = 'dvdf'
    const expected = 3

    expect(fn(s)).toBe(expected)
  })
}
