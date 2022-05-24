import { describe, expect, it } from 'vitest'
import { longestWord } from '.'

describe('词典中最长的单词', () => {
  describe('哈希集合', () => {
    testCase(longestWord)
  })
})

function testCase(fn: (words: string[]) => string) {
  it.each([
    [
      ['w', 'wo', 'wor', 'worl', 'world'],
      'world',
    ],
    [
      ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'],
      'apple',
    ],
  ])('示例%#', (words, expected) => {
    expect(fn(words)).toBe(expected)
  })
}
