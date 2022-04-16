import { describe, expect, it } from 'vitest'
import { knightProbability } from '.'

describe('骑士在棋盘上的概率', () => {
  testCase(knightProbability)
})

function testCase(
  fn: (n: number, k: number, row: number, col: number) => number,
) {
  it.each([
    [3, 2, 0, 0, 0.0625],
    [1, 0, 0, 0, 1.0],
  ])('示例%#', (n, k, row, column, expected) => {
    expect(fn(n, k, row, column)).toBe(expected)
  })
}
