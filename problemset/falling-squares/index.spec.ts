import { describe, expect, it } from 'vitest'
import { fallingSquares } from '.'

describe('掉落的方块', () => {
  testCase(fallingSquares)
})

function testCase(fn: (positions: number[][]) => number[]) {
  it.each([
    [
      [[1, 2], [2, 3], [6, 1]],
      [2, 5, 5],
    ],
    [
      [[100, 100], [200, 100]],
      [100, 100],
    ],
  ])('示例%#', (positions, expected) => {
    expect(fn(positions)).toStrictEqual(expected)
  })
}
