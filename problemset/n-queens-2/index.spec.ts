import { describe, expect, it } from 'vitest'
import { totalNQueens } from '.'

describe('N皇后 II', () => {
  testCase(totalNQueens)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [4, 2],
    [1, 1],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
