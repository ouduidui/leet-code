import { describe, expect, it } from 'vitest'
import { calculateMinimumHP } from '.'

describe('地下城游戏', () => {
  testCase(calculateMinimumHP)
})

function testCase(fn: (dungeon: number[][]) => number) {
  it.each([
    [[
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
    ], 7],
  ])('示例%#', (dungeon, expected) => {
    expect(fn(dungeon)).toBe(expected)
  })
}
