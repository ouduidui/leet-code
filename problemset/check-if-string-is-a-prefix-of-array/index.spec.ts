import { describe, expect, it } from 'vitest'
import { isPrefixString } from '.'

describe('检查字符串是否为数组前缀', () => {
  testCase(isPrefixString)
})

function testCase(fn: (s: string, words: string[]) => boolean) {
  it.each([
    ['iloveleetcode', ['i', 'love', 'leetcode', 'apples'], true],
    ['iloveleetcode', ['apples', 'i', 'love', 'leetcode'], false],
    ['ccccccccc', ['c', 'cc'], false],
  ])('示例%#', (s, words, expected) => {
    expect(fn(s, words)).toBe(expected)
  })
}
