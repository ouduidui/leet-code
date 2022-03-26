import { describe, expect, it } from 'vitest'
import { intToRoman, intToRoman2, intToRoman3 } from '.'
// need refactor
describe('整数转罗马数字', () => {
  describe('暴力解法', () => {
    testCase(intToRoman)
  })

  describe('模拟', () => {
    testCase(intToRoman2)
  })

  describe('硬编码数字', () => {
    testCase(intToRoman3)
  })
})

function testCase(fn: (num: number) => string) {
  it('示例一', () => {
    const num = 3
    const expected = 'III'

    expect(fn(num)).toEqual(expected)
  })

  it('示例二', () => {
    const num = 4
    const expected = 'IV'

    expect(fn(num)).toEqual(expected)
  })

  it('示例三', () => {
    const num = 9
    const expected = 'IX'

    expect(fn(num)).toEqual(expected)
  })

  it('示例四', () => {
    const num = 58
    const expected = 'LVIII'

    expect(fn(num)).toEqual(expected)
  })

  it('示例五', () => {
    const num = 1994
    const expected = 'MCMXCIV'

    expect(fn(num)).toEqual(expected)
  })
}
