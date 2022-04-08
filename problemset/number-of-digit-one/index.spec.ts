
import { describe, expect, it } from 'vitest'
import { countDigitOne } from '.'

describe('数字1的个数', () => {
  testCase(countDigitOne)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [13, 6],
    [0, 0],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
