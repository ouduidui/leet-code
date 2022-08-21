import { describe, expect, it } from 'vitest'
import { isPrefixOfWord } from '.'

describe('检查单词是否为句中其他单词的前缀', () => {
  testCase(isPrefixOfWord)
})

function testCase(fn: (sentence: string, searchWord: string) => number) {
  it.each([
    [
      'i love eating burger',
      'burg',
      4,
    ],
    [
      'this problem is an easy problem',
      'pro',
      2,
    ],
    [
      'i am tired',
      'you',
      -1,
    ],
  ])('示例%#', (sentence, searchWord, expected) => {
    expect(fn(sentence, searchWord)).toBe(expected)
  })
}
