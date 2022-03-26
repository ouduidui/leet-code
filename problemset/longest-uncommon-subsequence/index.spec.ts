import { describe, expect, it } from 'vitest'
import { findLUSlength } from '.'
// need refactor
describe('最长特殊序列', () => {
  testCase(findLUSlength)
})

function testCase(fn: (a: string, b: string) => number) {
  it('示例一', () => {
    const a = 'aba'
    const b = 'cbc'
    const expected = 3

    expect(fn(a, b)).toBe(expected)
  })

  it('示例二', () => {
    const a = 'aaa'
    const b = 'bbb'
    const expected = 3

    expect(fn(a, b)).toBe(expected)
  })

  it('示例三', () => {
    const a = 'aaa'
    const b = 'aaa'
    const expected = -1

    expect(fn(a, b)).toBe(expected)
  })
}
