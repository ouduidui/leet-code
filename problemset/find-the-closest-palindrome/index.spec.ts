import { describe, expect, it } from 'vitest'
import { nearestPalindromic } from '.'
// need refactor
describe('寻找最近的回文数', () => {
  testCase(nearestPalindromic)
})

function testCase(fn: (n: string) => string) {
  it('示例一', () => {
    const n = '123'
    const expected = '121'
    expect(fn(n)).toBe(expected)
  })

  it('示例二', () => {
    const n = '1'
    const expected = '0'
    expect(fn(n)).toBe(expected)
  })
}
