import { describe, expect, it } from 'vitest'
import { areAlmostEqual } from '.'

describe('仅执行一次字符串交换能否使两个字符串相等', () => {
  testCase(areAlmostEqual)
})

function testCase(fn: (s1: string, s2: string) => boolean) {
  it.each([
    [
      'bank',
      'kanb',
      true,
    ],
    [
      'attack',
      'defend',
      false,
    ],
    [
      'kelb',
      'kelb',
      true,
    ],
    [
      'abcd',
      'dcba',
      false,
    ],
  ])('示例%#', (s1, s2, expected) => {
    expect(fn(s1, s2)).toBe(expected)
  })
}
