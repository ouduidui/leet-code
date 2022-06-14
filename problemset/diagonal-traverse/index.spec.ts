import { describe, expect, it } from 'vitest'
import { findDiagonalOrder } from '.'

describe('对角线遍历', () => {
  testCase(findDiagonalOrder)
})

function testCase(fn: (mat: number[][]) => number[]) {
  it.each([
    [
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      [1, 2, 4, 7, 5, 3, 6, 8, 9],
    ],
    [
      [[1, 2], [3, 4]],
      [1, 2, 3, 4],
    ],
  ])('示例%#', (mat, expected) => {
    expect(fn(mat)).toStrictEqual(expected)
  })
}
