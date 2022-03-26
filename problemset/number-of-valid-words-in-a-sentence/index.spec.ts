import { describe, expect, it } from 'vitest'
import { countValidWords } from '.'
// need refactor
describe('句子中的有效单词数', () => {
  testCase(countValidWords)
})

function testCase(fn: (sentence: string) => number) {
  it('示例一', () => {
    const sentence = 'cat and  dog'
    const expected = 3
    expect(fn(sentence)).toBe(expected)
  })

  it('示例二', () => {
    const sentence = '!this  1-s b8d!'
    const expected = 0
    expect(fn(sentence)).toBe(expected)
  })

  it('示例三', () => {
    const sentence = 'alice and  bob are playing stone-game10'
    const expected = 5
    expect(fn(sentence)).toBe(expected)
  })

  it('示例四', () => {
    const sentence = 'he bought 2 pencils, 3 erasers, and 1  pencil-sharpener.'
    const expected = 6
    expect(fn(sentence)).toBe(expected)
  })
}
