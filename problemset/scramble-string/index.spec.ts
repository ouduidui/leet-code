import { describe, expect, it } from 'vitest'
import { isScramble } from '.'
describe('扰乱字符串', () => {
  testCase(isScramble)
})

function testCase(fn: (s1: string, s2: string) => boolean) {
  it.each([
    ['great', 'rgeat', true],
    ['abcde', 'caebd', false],
    ['a', 'a', true],
  ])('示例%#', (s1, s2, expected) => {
    expect(fn(s1, s2)).toBe(expected)
  })
}
