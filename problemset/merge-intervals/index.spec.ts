import { twoDimensionalArrayEqual } from '~/utils/tools';
import { merge } from '.';
import { describe, it } from 'vitest';

describe('合并区间', () => {
  testCase(merge);
});

function testCase(fn: (intervals: number[][]) => number[][]) {
  it.each([
    [
      [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
      ],
      [
        [1, 6],
        [8, 10],
        [15, 18]
      ]
    ],
    [
      [
        [1, 4],
        [4, 5]
      ],
      [[1, 5]]
    ],
    [
      [
        [1, 4],
        [0, 2],
        [3, 5]
      ],
      [[0, 5]]
    ]
  ])('示例%#', (intervals, expected) => {
    twoDimensionalArrayEqual(fn(intervals), expected);
  });
}
