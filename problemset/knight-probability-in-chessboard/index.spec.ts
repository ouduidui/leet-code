import { describe, expect, it } from 'vitest'
import { knightProbability } from '.'
// need refactor
describe('骑士在棋盘上的概率', () => {
  testCase(knightProbability)
})

function testCase(
  fn: (n: number, k: number, row: number, col: number) => number,
) {
  it('示例一', () => {
    const n = 3
    const k = 2
    const row = 0
    const column = 0
    const expected = 0.0625
    expect(fn(n, k, row, column)).toBe(expected)
  })

  it('示例二', () => {
    const n = 1
    const k = 0
    const row = 0
    const column = 0
    const expected = 1.0
    expect(fn(n, k, row, column)).toBe(expected)
  })
}
