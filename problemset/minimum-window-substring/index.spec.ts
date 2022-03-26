import { describe, expect, it } from 'vitest'
import { minWindow } from '.'
// need refactor
describe('最小覆盖子串', () => {
  testCase(minWindow)
})

function testCase(fn: (s: string, t: string) => string) {
  it('示例一', () => {
    const s = 'ADOBECODEBANC'
    const t = 'ABC'
    const expected = 'BANC'

    expect(fn(s, t)).toBe(expected)
  })

  it('示例二', () => {
    const s = 'a'
    const t = 'a'
    const expected = 'a'

    expect(fn(s, t)).toBe(expected)
  })

  it('示例三', () => {
    const s = 'a'
    const t = 'aa'
    const expected = ''

    expect(fn(s, t)).toBe(expected)
  })

  it('示例四', () => {
    const s = 'ab'
    const t = 'a'
    const expected = 'a'

    expect(fn(s, t)).toBe(expected)
  })

  it('示例五', () => {
    const s = 'abc'
    const t = 'cba'
    const expected = 'abc'

    expect(fn(s, t)).toBe(expected)
  })

  it('示例六', () => {
    const s = 'bbaa'
    const t = 'aba'
    const expected = 'baa'

    expect(fn(s, t)).toBe(expected)
  })
}
