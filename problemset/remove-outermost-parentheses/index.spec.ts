import { describe, expect, it } from 'vitest'
import { removeOuterParentheses } from '.'

describe('删除最外层的括号', () => {
  testCase(removeOuterParentheses)
})

function testCase(fn: (s: string) => string) {
  it.each([
    ['(()())(())', '()()()'],
    ['(()())(())(()(()))', '()()()()(())'],
    ['()()', ''],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
