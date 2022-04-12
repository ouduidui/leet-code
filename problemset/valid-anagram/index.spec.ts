import { describe, expect, it } from 'vitest'
import { isAnagram } from '.'

describe('有效的字母异位词', () => {
  testCase(isAnagram)
})

function testCase(fn: (s: string, t: string) => boolean) {
  it.each([
    ['anagram', 'nagaram', true],
    ['rat', 'car', false],
  ])('示例%#', (s, t, expected) => {
    expect(fn(s, t)).toBe(expected)
  })
}
