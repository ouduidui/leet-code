import { describe, expect, it } from 'vitest'
import { minimumMoves } from '.'

describe('转换字符串的最少操作次数', () => {
  testCase(minimumMoves)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['XXX', 1],
    ['XXOX', 2],
    ['OOOO', 0],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
