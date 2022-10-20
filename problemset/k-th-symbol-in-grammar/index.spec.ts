import { describe, expect, it } from 'vitest'
import { kthGrammar, kthGrammar2 } from '.'

describe('第K个语法符号', () => {
  describe('递归', () => testCase(kthGrammar))
  describe('找规律 + 位运算', () => testCase(kthGrammar2))
})

function testCase(fn: typeof kthGrammar) {
  it.each([
    [1, 1, 0],
    [2, 1, 0],
    [2, 2, 1],
  ])('示例%#', (n, k, expected) => {
    expect(fn(n, k)).toBe(expected)
  })
}
