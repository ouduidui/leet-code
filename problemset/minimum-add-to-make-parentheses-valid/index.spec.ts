import { describe, expect, it } from 'vitest'
import { minAddToMakeValid } from '.'

describe('使括号有效的最少添加', () => {
  testCase(minAddToMakeValid)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['())', 1],
    ['(((', 3],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
