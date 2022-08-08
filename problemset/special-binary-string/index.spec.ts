import { describe, expect, it } from 'vitest'
import { makeLargestSpecial } from '.'

describe('特殊的二进制序列', () => {
  testCase(makeLargestSpecial)
})

function testCase(fn: (s: string) => string) {
  it.each([
    [
      '11011000',
      '11100100',
    ],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
