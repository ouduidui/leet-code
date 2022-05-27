import { describe, expect, it } from 'vitest'
import { findClosest } from '.'

describe('单词距离', () => {
  testCase(findClosest)
})

function testCase(fn: (words: string[], word1: string, word2: string) => number) {
  it.each([
    [
      ['I', 'am', 'a', 'student', 'from', 'a', 'university', 'in', 'a', 'city'],
      'a',
      'student',
      1,
    ],
  ])('示例%#', (words, word1, word2, expected) => {
    expect(fn(words, word1, word2)).toBe(expected)
  })
}
