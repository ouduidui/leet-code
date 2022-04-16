import { describe, expect, it } from 'vitest'
import { nearestPalindromic } from '.'

describe('寻找最近的回文数', () => {
  testCase(nearestPalindromic)
})

function testCase(fn: (n: string) => string) {
  it.each([
    ['123', '121'],
    ['1', '0'],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
