import { describe, expect, it } from 'vitest'
import { maxPoints } from '.'

describe('直线上最多的点数', () => {
  testCase(maxPoints)
})

function testCase(fn: (points: number[][]) => number) {
  it.each([
    [
      [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      3,
    ],
    [
      [
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4],
      ],
      4,
    ],
  ])('示例%#', (points, expected) => {
    expect(fn(points)).toBe(expected)
  })
}
