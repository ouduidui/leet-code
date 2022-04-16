import { describe, expect, it } from 'vitest'
import { generateParenthesis } from '.'

describe('括号生成', () => {
  testCase(generateParenthesis)
})

function testCase(fn: (n: number) => string[]) {
  it.each([
    [3, [
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ]],
    [1, ['()']],
  ])('示例%#', (n, expected) => {
    checkExpected(fn(n), expected)
  })
}

function checkExpected(ans: string[], expected: string[]): void {
  expect(ans.length).toBe(expected.length)
  expect(ans.every(item => expected.includes(item))).toBe(true)
}
