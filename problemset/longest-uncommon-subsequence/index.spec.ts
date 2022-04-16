import { describe, expect, it } from 'vitest'
import { findLUSlength } from '.'

describe('最长特殊序列', () => {
  testCase(findLUSlength)
})

function testCase(fn: (a: string, b: string) => number) {
  it.each([
    ['aba', 'cbc', 3],
    ['aaa', 'bbb', 3],
    ['aaa', 'aaa', -1],
  ])('示例%#', (a, b, expected) => {
    expect(fn(a, b)).toBe(expected)
  })
}
