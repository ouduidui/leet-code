import { describe, expect, it } from 'vitest'
import { replaceWords } from '.'

describe('单词替换', () => {
  testCase(replaceWords)
})

function testCase(fn: (dictionary: string[], sentence: string) => string) {
  it.each([
    [
      ['cat', 'bat', 'rat'],
      'the cattle was rattled by the battery',
      'the cat was rat by the bat',
    ],
    [
      ['a', 'b', 'c'],
      'aadsfasf absbs bbab cadsfafs',
      'a a b c',
    ],
  ])('示例%#', (dictionary, sentence, expected) => {
    expect(fn(dictionary, sentence)).toBe(expected)
  })
}
