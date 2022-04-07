
import { describe, expect, it } from 'vitest'
import { calculate } from '.'

describe('基本计算器 II', () => {
  testCase(calculate)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['3+2*2', 7],
    [' 3/2 ', 1],
    [' 3+5 / 2 ', 5],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
