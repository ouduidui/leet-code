import { describe, expect, it } from 'vitest'
import { lengthOfLastWord } from '.'
// need refactor
describe('最后一个单词的长度', () => {
  describe('反向遍历', () => {
    testCase(lengthOfLastWord)
  })
})

function testCase(fn: (s: string) => number) {
  it('示例一', () => {
    const s = 'Hello World'
    const expected = 5

    expect(fn(s)).toBe(expected)
  })

  it('示例二', () => {
    const s = '   fly me   to   the moon  '
    const expected = 4

    expect(fn(s)).toBe(expected)
  })

  it('示例三', () => {
    const s = 'luffy is still joyboy'
    const expected = 6

    expect(fn(s)).toBe(expected)
  })
}
