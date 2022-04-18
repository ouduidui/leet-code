import { describe, expect, it } from 'vitest'
import { wordPattern } from '.'

describe('单词规律', () => {
  testCase(wordPattern)
})

function testCase(fn: (pattern: string, s: string) => boolean) {
  it.each([
    ['abba', 'dog cat cat dog', true],
    ['abba', 'dog cat cat fish', false],
    ['aaaa', 'dog cat cat dog', false],
    ['abba', 'dog dog dog dog', false],
  ])('示例%#', (pattern, s, expected) => {
    expect(fn(pattern, s)).toBe(expected)
  })
}
