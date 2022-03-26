import { describe, expect, it } from 'vitest'
import { myAtoi, myAtoi2 } from '.'
// need refactor
describe('字符串转换整数(atoi)', () => {
  describe('暴力解法', () => {
    testCase(myAtoi)
  })

  describe('自动机', () => {
    testCase(myAtoi2)
  })
})

function testCase(fn: (s: string) => number) {
  it('示例一', () => {
    const s = '42'
    const expected = 42

    expect(fn(s)).toBe(expected)
  })

  it('示例二', () => {
    const s = '   -42'
    const expected = -42

    expect(fn(s)).toBe(expected)
  })

  it('示例三', () => {
    const s = '4193 with words'
    const expected = 4193

    expect(fn(s)).toBe(expected)
  })

  it('示例四', () => {
    const s = 'words and 987'
    const expected = 0

    expect(fn(s)).toBe(expected)
  })

  it('示例五', () => {
    const s = '-91283472332'
    const expected = -2147483648

    expect(fn(s)).toBe(expected)
  })

  it('示例六', () => {
    const s = '   +0 123'
    const expected = 0

    expect(fn(s)).toBe(expected)
  })
}
