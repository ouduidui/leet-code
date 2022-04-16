import { describe, expect, it } from 'vitest'
import { letterCombinations, letterCombinations2 } from '.'

describe('电话号码的字母组合', () => {
  describe('暴力解法', () => {
    testCase(letterCombinations)
  })

  describe('回溯', () => {
    testCase(letterCombinations2)
  })
})

function testCase(fn: (digits: string) => string[]) {
  it.each([
    ['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']],
    ['', []],
    ['2', ['a', 'b', 'c']],
  ])('示例%#', (digits, expected) => {
    checkExpected(fn(digits), expected)
  })
}

function checkExpected(ans: string[], expected: string[]) {
  expect(ans.length).toBe(expected.length)
  expect(ans.every(str => expected.includes(str))).toBe(true)
}
