import { describe, expect, it } from 'vitest'
import { isFlipedString, isFlipedString2 } from '.'

describe('字符串轮转', () => {
  describe('模拟', () => testCase(isFlipedString))
  describe('搜索子字符串', () => testCase(isFlipedString2))
})

function testCase(fn: (s1: string, s2: string) => boolean) {
  it.each([
    ['waterbottle', 'erbottlewat', true],
    ['aa', 'aba', false],
  ])('示例%#', (s1, s2, expected) => {
    expect(fn(s1, s2)).toBe(expected)
  })
}
