import { describe, expect, it } from 'vitest'
import { findBall } from '.'

describe('球会落何处', () => {
  testCase(findBall)
})

function testCase(fn: (grid: number[][]) => number[]) {
  it.each([
    [
      [
        [1, 1, 1, -1, -1],
        [1, 1, 1, -1, -1],
        [-1, -1, -1, 1, 1],
        [1, 1, 1, 1, -1],
        [-1, -1, -1, -1, -1],
      ],
      [1, -1, -1, -1, -1],
    ],
    [[[-1]], [-1]],
    [
      [
        [1, 1, 1, 1, 1, 1],
        [-1, -1, -1, -1, -1, -1],
        [1, 1, 1, 1, 1, 1],
        [-1, -1, -1, -1, -1, -1],
      ],
      [0, 1, 2, 3, 4, -1],
    ],
  ])('示例%#', (grid, expected) => {
    expect(fn(grid)).toStrictEqual(expected)
  })
}
