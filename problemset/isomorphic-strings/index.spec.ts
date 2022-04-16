import { describe, expect, it } from 'vitest'
import { isIsomorphic, isIsomorphic2 } from '.'

describe('同构字符串', () => {
  describe('暴力解法', () => {
    testCase(isIsomorphic)
  })

  describe('哈希表', () => {
    testCase(isIsomorphic2)
  })
})

function testCase(fn: (s: string, t: string) => boolean) {
  it.each([
    ['egg', 'add', true],
    ['foo', 'bar', false],
    ['paper', 'title', true],
  ])('示例%#', (s, t, expected) => {
    expect(fn(s, t)).toBe(expected)
  })
}
