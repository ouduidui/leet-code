import { describe, expect, it } from 'vitest'
import { isIsomorphic, isIsomorphic2 } from '.'
// need refactor
describe('同构字符串', () => {
  describe('暴力解法', () => {
    testCase(isIsomorphic)
  })

  describe('哈希表', () => {
    testCase(isIsomorphic2)
  })
})

function testCase(fn: (s: string, t: string) => boolean) {
  it('示例一', () => {
    const s = 'egg'
    const t = 'add'
    const expected = true
    expect(fn(s, t)).toBe(expected)
  })

  it('示例二', () => {
    const s = 'foo'
    const t = 'bar'
    const expected = false
    expect(fn(s, t)).toBe(expected)
  })

  it('示例三', () => {
    const s = 'paper'
    const t = 'title'
    const expected = true
    expect(fn(s, t)).toBe(expected)
  })
}
