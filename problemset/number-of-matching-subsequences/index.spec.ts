import { describe, expect, it } from 'vitest'
import { numMatchingSubseq, numMatchingSubseq2 } from '.'

describe('匹配子序列的单词数', () => {
  describe('二分查找', () => testCase(numMatchingSubseq))
  describe('多指针', () => testCase(numMatchingSubseq2))
})

function testCase(fn: (s: string, words: string[]) => number) {
  it.each([
    ['abcde', ['a', 'bb', 'acd', 'ace'], 3],
    ['dsahjpjauf', ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax'], 2],
  ])('示例%#', (s, words, expected) => {
    expect(fn(s, words)).toBe(expected)
  })
}
