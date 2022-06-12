import { describe, expect, it } from 'vitest'
import { findAndReplacePattern } from '.'

describe('查找和替换模式', () => {
  testCase(findAndReplacePattern)
})

function testCase(fn: (words: string[], pattern: string) => string[]) {
  it.each([
    [
      ['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'],
      'abb',
      ['mee', 'aqq'],
    ],
  ])('示例%#', (words, pattern, expected) => {
    expect(fn(words, pattern)).toStrictEqual(expected)
  })
}
