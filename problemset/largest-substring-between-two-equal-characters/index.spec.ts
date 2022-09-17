import { describe, expect, it } from 'vitest'
import { maxLengthBetweenEqualCharacters } from '.'

describe('两个相同字符之间的最长子字符串', () => {
  testCase(maxLengthBetweenEqualCharacters)
})

function testCase(fn: (s: string) => number) {
  it.each([
    [
      'aa', 0,
    ],
    [
      'abca', 2,
    ],
    [
      'cbzxy', -1,
    ],
    [
      'cabbac', 4,
    ],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
