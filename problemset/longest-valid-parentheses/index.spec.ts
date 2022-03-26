import { describe, expect, it } from 'vitest'
import {
  longestValidParentheses,
  longestValidParentheses2,
  longestValidParentheses3,
  longestValidParentheses4,
} from '.'
// need refactor
describe('最长有效括号', () => {
  describe('暴力解法', () => {
    testCase(longestValidParentheses)
  })

  describe('栈', () => {
    testCase(longestValidParentheses2)
  })

  describe('动态规划', () => {
    testCase(longestValidParentheses3)
  })

  describe('', () => {
    testCase(longestValidParentheses4)
  })
})

function testCase(fn: (s: string) => number) {
  it('示例一', () => {
    const s = '(()'
    const expected = 2

    expect(fn(s)).toBe(expected)
  })

  it('示例二', () => {
    const s = ')()())'
    const expected = 4

    expect(fn(s)).toBe(expected)
  })

  it('示例三', () => {
    const s = ''
    const expected = 0

    expect(fn(s)).toBe(expected)
  })
}
