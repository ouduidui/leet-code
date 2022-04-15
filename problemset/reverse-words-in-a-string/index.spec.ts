import { describe, expect, it } from 'vitest'
import { reverseWords, reverseWords2 } from '.'

describe('翻转字符串中里的单词', () => {
  describe('语言特性', () => {
    testCase(reverseWords)
  })

  describe('双指针', () => {
    testCase(reverseWords2)
  })
})

function testCase(fn: (s: string) => string) {
  it.each([
    ['the sky is blue', 'blue is sky the'],
    ['  hello world  ', 'world hello'],
    ['a good   example', 'example good a'],
    ['  Bob    Loves  Alice   ', 'Alice Loves Bob'],
    ['Alice does not even like bob', 'bob like even not does Alice'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
