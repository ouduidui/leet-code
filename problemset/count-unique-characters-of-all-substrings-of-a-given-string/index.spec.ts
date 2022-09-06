import { describe, expect, it } from 'vitest'
import { uniqueLetterString } from '.'

describe('统计子串中的唯一字符', () => {
  testCase(uniqueLetterString)
})

function testCase(fn: (s: string) => number) {
  it.each([
    [
      'ABC',
      10,
    ],
    [
      'ABA',
      8,
    ],
    [
      'LEETCODE',
      92,
    ],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
