import { describe, expect, it } from 'vitest'
import { reverse } from '.'

describe('整数反转', () => {
  describe('暴力解法', () => {
    testCase(reverse)
  })
})

function testCase(fn: (x: number) => number) {
  it.each([
    [123, 321],
    [-123, -321],
    [120, 21],
    [0, 0],
  ])('示例%#', (x, expected) => {
    expect(fn(x)).toBe(expected)
  })
}
