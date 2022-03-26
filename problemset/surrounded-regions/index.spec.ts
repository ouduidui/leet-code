import { describe, expect, it } from 'vitest'
import { solve, solve2 } from '.'

describe('被围绕的区域', () => {
  describe('深度优先搜索', () => {
    testCase(solve)
  })
  describe('广度优先搜索', () => {
    testCase(solve2)
  })
})

function testCase(fn: (board: string[][]) => void) {
  it.each([
    [
      [
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
      [
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
    ],
    [[['X']], [['X']]],
    [
      [
        ['X', 'O', 'X', 'O', 'X', 'O'],
        ['O', 'X', 'O', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'O', 'X', 'O'],
        ['O', 'X', 'O', 'X', 'O', 'X'],
      ],
      [
        ['X', 'O', 'X', 'O', 'X', 'O'],
        ['O', 'X', 'X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X', 'X', 'O'],
        ['O', 'X', 'O', 'X', 'O', 'X'],
      ],
    ],
    [
      [
        ['O', 'X', 'X', 'O', 'X'],
        ['X', 'O', 'O', 'X', 'O'],
        ['X', 'O', 'X', 'O', 'X'],
        ['O', 'X', 'O', 'O', 'O'],
        ['X', 'X', 'O', 'X', 'O'],
      ],
      [
        ['O', 'X', 'X', 'O', 'X'],
        ['X', 'X', 'X', 'X', 'O'],
        ['X', 'X', 'X', 'O', 'X'],
        ['O', 'X', 'O', 'O', 'O'],
        ['X', 'X', 'O', 'X', 'O'],
      ],
    ],
    [
      [
        ['X', 'O', 'X', 'O', 'O', 'O', 'O'],
        ['X', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['X', 'O', 'O', 'O', 'O', 'X', 'O'],
        ['O', 'O', 'O', 'O', 'X', 'O', 'X'],
        ['O', 'X', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'X', 'O', 'O', 'O', 'O', 'O'],
      ],
      [
        ['X', 'O', 'X', 'O', 'O', 'O', 'O'],
        ['X', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['X', 'O', 'O', 'O', 'O', 'X', 'O'],
        ['O', 'O', 'O', 'O', 'X', 'O', 'X'],
        ['O', 'X', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'X', 'O', 'O', 'O', 'O', 'O'],
      ],
    ],
  ])('示例%#', (board, expected) => {
    fn(board)
    expect(board).toStrictEqual(expected)
  })
}
