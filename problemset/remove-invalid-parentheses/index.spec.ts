import { describe, expect, it } from 'vitest'
import { removeInvalidParentheses, removeInvalidParentheses2 } from '.'

describe('删除无效的括号', () => {
  describe('回溯 + 剪枝', () => {
    testCase(removeInvalidParentheses)
  })

  describe('广度优先搜索', () => {
    testCase(removeInvalidParentheses2)
  })
})

function testCase(fn: (s: string) => string[]) {
  it.each([
    ['()())()', ['(())()', '()()()']],
    ['(a)())()', ['(a())()', '(a)()()']],
    [')(', ['']],
  ])('示例%#', (s, expected) => {
    expect(fn(s).sort()).toStrictEqual(expected.sort())
  })
}
