import { describe, expect, it } from 'vitest'
import { lengthOfLastWord } from '.'

describe('最后一个单词的长度', () => {
  describe('反向遍历', () => {
    testCase(lengthOfLastWord)
  })
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['Hello World', 5],
    ['   fly me   to   the moon  ', 4],
    ['luffy is still joyboy', 6],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
