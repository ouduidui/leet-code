import { describe, expect, it } from 'vitest'
import { removeDuplicateLetters } from '.'

describe('去除重复字母', () => {
  testCase(removeDuplicateLetters)
})

function testCase(fn: (s: string) => string) {
  it.each([
    ['bcabc', 'abc'],
    ['cbacdcbc', 'acdb'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
