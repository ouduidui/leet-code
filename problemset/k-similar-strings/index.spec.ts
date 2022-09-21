import { describe, expect, it } from 'vitest'
import { kSimilarity } from '.'

describe('相似度为 K 的字符串', () => {
  testCase(kSimilarity)
})

function testCase(fn: (s1: string, s2: string) => number) {
  it.each([
    [
      'ab', 'ba', 1,
    ],
    [
      'abc', 'bca', 2,
    ],
  ])('示例%#', (s1, s2, expected) => {
    expect(fn(s1, s2)).toBe(expected)
  })
}
