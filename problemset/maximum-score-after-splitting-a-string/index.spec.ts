import { describe, expect, it } from 'vitest'
import { maxScore, maxScore2 } from '.'

describe('分割字符串的最大得分', () => {
  describe('', () => testCase(maxScore))
  describe('', () => testCase(maxScore2))
})

function testCase(fn: (s: string) => number) {
  it.each([
    [
      '011101', 5,
    ],
    [
      '00111', 5,
    ],
    [
      '1111', 3,
    ],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
