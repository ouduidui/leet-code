import { describe, expect, it } from 'vitest'
import { isUgly } from '.'

describe('丑数', () => {
  testCase(isUgly)
})

function testCase(fn: (n: number) => boolean) {
  it.each([
    [6, true],
    [1, true],
    [14, false],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
