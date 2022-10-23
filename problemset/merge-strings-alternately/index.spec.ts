import { describe, expect, it } from 'vitest'
import { mergeAlternately } from '.'

describe('交替合并字符串', () => {
  testCase(mergeAlternately)
})

function testCase(fn: typeof mergeAlternately) {
  it.each([
    ['abc', 'pqr', 'apbqcr'],
    ['ab', 'pqrs', 'apbqrs'],
    ['abcd', 'pq', 'apbqcd'],
  ])('示例%#', (word1, word2, expected) => {
    expect(fn(word1, word2)).toBe(expected)
  })
}
