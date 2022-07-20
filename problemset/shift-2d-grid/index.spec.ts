import { describe, expect, it } from 'vitest'
import { shiftGrid } from '.'

describe('二维网格迁移', () => {
  testCase(shiftGrid)
})

function testCase(fn: (grid: number[][], k: number) => number[][]) {
  it.each([
    [
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      1,
      [[9, 1, 2], [3, 4, 5], [6, 7, 8]],
    ],
    [
      [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]],
      4,
      [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]],
    ],
    [
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      9,
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    ],
  ])('示例%#', (grid, k, expected) => {
    expect(fn(grid, k)).toStrictEqual(expected)
  })
}
