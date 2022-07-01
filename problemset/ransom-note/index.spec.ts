import { describe, expect, it } from 'vitest'
import { canConstruct } from '.'

describe('赎金信', () => {
  testCase(canConstruct)
})

function testCase(fn: (ransomNote: string, magazine: string) => boolean) {
  it.each([
    [
      'a',
      'b',
      false,
    ],
    [
      'aa',
      'ab',
      false,
    ],
    [
      'aa',
      'aab',
      true,
    ],
  ])('示例%#', (ransomNote, magazine, expected) => {
    expect(fn(ransomNote, magazine)).toBe(expected)
  })
}
