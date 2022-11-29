import { describe, expect, it } from 'vitest'
import { minOperations } from '.'

describe('生成交替二进制字符串的最少操作数', () => {
  testCase(minOperations)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['0100', 1],
    ['10', 0],
    ['1111', 2],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
