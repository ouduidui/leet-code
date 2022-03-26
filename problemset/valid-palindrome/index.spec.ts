import { describe, expect, it } from 'vitest'
import { isPalindrome } from '.'

describe('验证回文串', () => {
  testCase(isPalindrome)
})

function testCase(fn: (s: string) => boolean) {
  it.each([
    ['A man, a plan, a canal: Panama', true],
    ['race a car', false],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
