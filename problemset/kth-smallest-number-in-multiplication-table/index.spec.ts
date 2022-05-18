import { describe, expect, it } from 'vitest'
import { findKthNumber } from '.'

describe('乘法表中第k小的数', () => {
  testCase(findKthNumber)
})

function testCase(fn: (m: number, n: number, k: number) => number) {
  it.each([
    [3, 3, 5, 3],
    [2, 3, 6, 6],
  ])('示例%#', (m, n, k, expected) => {
    expect(fn(m, n, k)).toBe(expected)
  })
}
