import { describe, expect, it } from 'vitest'
import { ladderLength } from '.'

describe('单词接龙', () => {
  testCase(ladderLength)
})

function testCase(
  fn: (beginWord: string, endWord: string, wordList: string[]) => number,
) {
  it.each([
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'], 5],
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'], 0],
  ])('示例%#', (beginWord, endWord, wordList, expected) => {
    expect(fn(beginWord, endWord, wordList)).toBe(expected)
  })
}
