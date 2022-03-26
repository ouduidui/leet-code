import { describe, expect, it } from 'vitest'
import { wordBreak } from '.'

describe('单词拆分 II', () => {
  testCase(wordBreak)
})

function testCase(fn: (s: string, wordDict: string[]) => string[]) {
  it.each([
    [
      'catsanddog',
      ['cat', 'cats', 'and', 'sand', 'dog'],
      ['cat sand dog', 'cats and dog'],
    ],
    [
      'pineapplepenapple',
      ['apple', 'pen', 'applepen', 'pine', 'pineapple'],
      ['pine apple pen apple', 'pine applepen apple', 'pineapple pen apple'],
    ],
    ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat'], []],
  ])('示例%#', (s, wordDict, expected) => {
    expect(fn(s, wordDict)).toStrictEqual(expected)
  })
}
