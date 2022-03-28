import { describe, expect, it } from 'vitest'
import { findWords } from '.'

describe('单词搜索 II', () => {
  testCase(findWords)
})

function testCase(fn: (board: string[][], words: string[]) => string[]) {
  it.each([
    [
      [['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']],
      ['oath', 'pea', 'eat', 'rain'],
      ['oath', 'eat'],
    ],
    [[['a', 'b'], ['c', 'd']], ['abcb'], []],
  ])('示例%#', (board, words, expected) => {
    expect(fn(board, words)).toStrictEqual(expected)
  })
}
