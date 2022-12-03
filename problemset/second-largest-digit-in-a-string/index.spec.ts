import { describe, expect, it } from 'vitest'
import { secondHighest } from '.'

describe('字符串中第二大的数字', () => {
  testCase(secondHighest)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['dfa12321afd', 2],
    ['abc1111', -1],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
