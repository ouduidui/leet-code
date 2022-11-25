import { describe, expect, it } from 'vitest'
import { expressiveWords } from '.'

describe('情感丰富的文字', () => {
  testCase(expressiveWords)
})

function testCase(fn: (s: string, words: string[]) => number) {
  it.each([
    ['heeellooo', ['hello', 'hi', 'helo'], 1],
  ])('示例%#', (s, words, expected) => {
    expect(fn(s, words)).toBe(expected)
  })
}
