import { describe, expect, it } from 'vitest'
import {
  longestNiceSubstring,
  longestNiceSubstring2,
  longestNiceSubstring3,
} from '.'

describe('最长的美好子字符串', () => {
  describe('暴力解法', () => {
    testCase(longestNiceSubstring)
  })

  describe('分治', () => {
    testCase(longestNiceSubstring2)
  })

  describe('滑动窗口', () => {
    testCase(longestNiceSubstring3)
  })
})

function testCase(fn: (s: string) => string) {
  it.each([
    ['YazaAay', 'aAa'],
    ['Bb', 'Bb'],
    ['c', ''],
    ['dDzeE', 'dD'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
