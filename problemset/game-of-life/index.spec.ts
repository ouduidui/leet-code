import { describe, expect, it } from 'vitest'
import { gameOfLife } from '.'

describe('生命游戏', () => {
  testCase(gameOfLife)
})

function testCase(fn: (board: number[][]) => void) {
  it.each([
    [
      [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 0, 0],
        [1, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
      ],
    ],
    [
      [
        [1, 1],
        [1, 0],
      ],
      [
        [1, 1],
        [1, 1],
      ],
    ],
  ])('示例%#', (board, expected) => {
    fn(board)
    expect(board).toStrictEqual(expected)
  })
}
