import { describe, expect, it } from 'vitest'
import { mostCommonWord } from '.'

describe('最常见的单词', () => {
  testCase(mostCommonWord)
})

function testCase(fn: (paragraph: string, banned: string[]) => string) {
  it.each([
    [
      'Bob hit a ball, the hit BALL flew far after it was hit.',
      ['hit'],
      'ball',
    ],
  ])('示例%#', (paragraph, banned, expected) => {
    expect(fn(paragraph, banned)).toBe(expected)
  })
}
