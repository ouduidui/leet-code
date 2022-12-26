import { describe, expect, it } from 'vitest'
import { countHomogenous } from '.'

describe('统计同构子字符串的数目', () => {
  testCase(countHomogenous)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['abbcccaa', 13],
    ['xy', 2],
    ['zzzzz', 15],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
