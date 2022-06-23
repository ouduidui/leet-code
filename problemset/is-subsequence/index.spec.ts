import { describe, expect, it } from 'vitest'
import { isSubsequence } from '.'

describe('判断子序列', () => {
  testCase(isSubsequence)
})

function testCase(fn: (s: string, t: string) => boolean) {
  it.each([
    [
      'abc',
      'ahbgdc',
      true,
    ],
    [
      'axc',
      'ahbgdc',
      false,
    ],
  ])('示例%#', (s, t, expected) => {
    expect(fn(s, t)).toBe(expected)
  })
}
