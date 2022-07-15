import { describe, expect, it } from 'vitest'
import { palindromePairs, palindromePairs2 } from '.'

describe('回文对', () => {
  describe('暴力解法', () => testCase(palindromePairs))
  describe('枚举前缀和后缀 + 哈希表', () => testCase(palindromePairs2))
})

function testCase(fn: (words: string[]) => number[][]) {
  it.each([
    [
      ['abcd', 'dcba', 'lls', 's', 'sssll'],
      [[0, 1], [1, 0], [3, 2], [2, 4]],
    ],
    [
      ['bat', 'tab', 'cat'],
      [[0, 1], [1, 0]],
    ],
    [
      ['a', ''],
      [[0, 1], [1, 0]],
    ],
  ])('示例%#', (words, expected) => {
    expect(fn(words)).toStrictEqual(expected)
  })
}
