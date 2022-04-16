import { describe, expect, it } from 'vitest'
import { findKthNumber } from '.'

describe('字典序的第K小数字', () => {
  testCase(findKthNumber)
})

function testCase(fn: (n: number, k: number) => number) {
  it.each([
    [13, 2, 10],
    [1, 1, 1],
  ])('示例%#', (n, k, expected) => {
    expect(fn(n, k)).toBe(expected)
  })
}
