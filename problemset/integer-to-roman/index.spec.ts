import { describe, expect, it } from 'vitest'
import { intToRoman, intToRoman2, intToRoman3 } from '.'

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
  it.each([
    [3, 'III'],
    [4, 'IV'],
    [9, 'IX'],
    [58, 'LVIII'],
    [1994, 'MCMXCIV'],
  ])('示例%#', (num, expected) => {
    expect(fn(num)).toEqual(expected)
  })
}
