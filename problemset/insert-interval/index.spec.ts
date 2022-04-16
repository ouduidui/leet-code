import { describe, it } from 'vitest'
import { insert } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'

describe('插入区间', () => {
  testCase(insert)
})

function testCase(
  fn: (intervals: number[][], newInterval: number[]) => number[][],
) {
  it.each([
    [
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5],
      [
        [1, 5],
        [6, 9],
      ],
    ],
    [
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8],
      [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    ],
    [
      [],
      [5, 7],
      [[5, 7]],
    ],
    [
      [[1, 5]],
      [2, 3],
      [[1, 5]],
    ],
    [
      [[1, 5]],
      [2, 7],
      [[1, 7]],
    ],
    [
      [[1, 5]],
      [6, 8],
      [
        [1, 5],
        [6, 8],
      ],
    ],
    [
      [[1, 5]],
      [0, 3],
      [[0, 5]],
    ],
    [
      [
        [0, 5],
        [9, 12],
      ],
      [7, 16],
      [
        [0, 5],
        [7, 16],
      ],
    ],
  ])('示例%#', (intervals, newInterval, expected) => {
    twoDimensionalArrayEqual(fn(intervals, newInterval), expected)
  })
}
