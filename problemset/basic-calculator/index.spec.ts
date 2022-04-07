import { describe, expect, it } from 'vitest'
import { calculate } from '.'

describe('基本计算器', () => {
  testCase(calculate)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['1 + 1', 2],
    [' 2-1 + 2 ', 3],
    ['(1+(4+5+2)-3)+(6+8)', 23],
  ])('示例 %#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
