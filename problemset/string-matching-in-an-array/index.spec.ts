import { describe, expect, it } from 'vitest'
import { stringMatching } from '.'

describe('数组中的字符串匹配', () => {
  testCase(stringMatching)
})

function testCase(fn: (words: string[]) => string[]) {
  it.each([
    [
      ['mass', 'as', 'hero', 'superhero'],
      ['as', 'hero'],

    ],
    [
      ['leetcode', 'et', 'code'],
      ['et', 'code'],
    ],
    [
      ['blue', 'green', 'bu'],
      [],
    ],
  ])('示例%#', (words, expected) => {
    expect(fn(words)).toStrictEqual(expected)
  })
}
