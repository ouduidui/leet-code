import { describe, expect, it } from 'vitest'
import { movesToChessboard } from '.'

describe('变为棋盘', () => {
  testCase(movesToChessboard)
})

function testCase(fn: (board: number[][]) => number) {
  it.each([
    [
      [[0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1]],
      2,
    ],
    [
      [[0, 1], [1, 0]],
      0,
    ],
    [
      [[1, 0], [1, 0]],
      -1,
    ],
  ])('示例%#', (board, expected) => {
    expect(fn(board)).toBe(expected)
  })
}
