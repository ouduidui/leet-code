import { describe, expect, it } from 'vitest'
import { scoreOfParentheses, scoreOfParentheses2, scoreOfParentheses3 } from '.'

describe('括号的分数', () => {
  describe('分治', () => testCase(scoreOfParentheses))
  describe('栈', () => testCase(scoreOfParentheses2))
  describe('计算最终分数和', () => testCase(scoreOfParentheses3))
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['()', 1],
    ['(())', 2],
    ['()()', 2],
    ['(()(()))', 6],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
