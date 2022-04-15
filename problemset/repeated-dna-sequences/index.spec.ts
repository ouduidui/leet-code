import { describe, expect, it } from 'vitest'
import {
  findRepeatedDnaSequences,
  findRepeatedDnaSequences2,
  findRepeatedDnaSequences3,
} from '.'

describe('重复的DNA序列', () => {
  describe('哈希表', () => {
    testCase(findRepeatedDnaSequences)
  })

  describe('哈希表 + 滑动窗口', () => {
    testCase(findRepeatedDnaSequences2)
  })

  describe('哈希表 + 滑动窗口 + 位运算', () => {
    testCase(findRepeatedDnaSequences3)
  })
})

function testCase(fn: (s: string) => string[]) {
  it.each([
    ['AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', ['AAAAACCCCC', 'CCCCCAAAAA']],
    ['AAAAAAAAAAAAA', ['AAAAAAAAAA']],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toEqual(expected)
  })
}
