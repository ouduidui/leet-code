import { describe, expect, it } from 'vitest'
import { letterCasePermutation, letterCasePermutation2, letterCasePermutation3 } from '.'

describe('字母大小写全排列', () => {
  describe('广度优先搜索', () => testCase(letterCasePermutation))
  describe('回溯', () => testCase(letterCasePermutation2))
  describe('二进制位图', () => testCase(letterCasePermutation3))
})

function testCase(fn: (s: string) => string[]) {
  it.each([
    ['a1b2', ['a1b2', 'a1B2', 'A1b2', 'A1B2']],
    ['3z4', ['3z4', '3Z4']],
  ])('示例%#', (s, expected) => {
    expect(fn(s).sort()).toStrictEqual(expected.sort())
  })
}
