import { describe, expect, it } from 'vitest'
import { romanToInt } from '.'

describe('罗马数字转整数', () => {
  describe('模拟', () => {
    testCase(romanToInt)
  })
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['III', 3],
    ['IV', 4],
    ['IX', 9],
    ['LVIII', 58],
    ['MCMXCIV', 1994],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toEqual(expected)
  })
}
