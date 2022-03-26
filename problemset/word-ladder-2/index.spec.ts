import { describe, expect, it } from 'vitest'
import { findLadders } from '.'

describe('单词接龙 II', () => {
  testCase(findLadders)
})

function testCase(
  fn: (beginWord: string, endWord: string, wordList: string[]) => string[][],
) {
  it.each([
    [
      'hit',
      'cog',
      ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
      [
        ['hit', 'hot', 'dot', 'dog', 'cog'],
        ['hit', 'hot', 'lot', 'log', 'cog'],
      ],
    ],
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'], []],
    [
      'red',
      'tax',
      ['ted', 'tex', 'red', 'tax', 'tad', 'den', 'rex', 'pee'],
      [
        ['red', 'ted', 'tad', 'tax'],
        ['red', 'ted', 'tex', 'tax'],
        ['red', 'rex', 'tex', 'tax'],
      ],
    ],
  ])('示例%#', (beginWord, endWord, wordList, expected) => {
    expect(fn(beginWord, endWord, wordList)).toStrictEqual(expected)
  })
}
