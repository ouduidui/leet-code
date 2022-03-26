import { describe, expect, it } from 'vitest'
import { findKthNumber } from '.'
// need refactor
describe('字典序的第K小数字', () => {
  testCase(findKthNumber)
})

function testCase(fn: (n: number, k: number) => number) {
  it('示例一', () => {
    const n = 13
    const k = 2
    const expected = 10
    expect(fn(n, k)).toBe(expected)
  })

  it('示例二', () => {
    const n = 1
    const k = 1
    const expected = 1
    expect(fn(n, k)).toBe(expected)
  })
}
