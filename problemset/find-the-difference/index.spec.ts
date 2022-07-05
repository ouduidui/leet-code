import { describe, expect, it } from 'vitest'
import { findTheDifference, findTheDifference2, findTheDifference3 } from '.'

describe('找不同', () => {
  describe('哈希表', () => testCase(findTheDifference))
  describe('求和', () => testCase(findTheDifference2))
  describe('位运算', () => testCase(findTheDifference3))
})

function testCase(fn: (s: string, t: string) => string) {
  it.each([
    [
      'abcd',
      'abcde',
      'e',
    ],
    [
      '',
      'y',
      'y',
    ],
  ])('示例%#', (s, t, expected) => {
    expect(fn(s, t)).toBe(expected)
  })
}
