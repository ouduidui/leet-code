import { describe, expect, it } from 'vitest'
import { platesBetweenCandles } from '.'

describe('蜡烛之间的盘子', () => {
  testCase(platesBetweenCandles)
})

function testCase(fn: (s: string, queries: number[][]) => number[]) {
  it.each([
    ['**|**|***|',
      [
        [2, 5],
        [5, 9],
      ],
      [2, 3],
    ],
    [
      '***|**|*****|**||**|*',
      [
        [1, 17],
        [4, 5],
        [14, 17],
        [5, 11],
        [15, 16],
      ],
      [9, 0, 0, 0, 0],
    ],
  ])('示例%#', (s, queries, expected) => {
    expect(fn(s, queries)).toStrictEqual(expected)
  })
}
