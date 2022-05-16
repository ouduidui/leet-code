import { describe, expect, it } from 'vitest'
import { searchMatrix, searchMatrix2 } from '.'

describe('搜索二维矩阵', () => {
  describe('两次二分查找', () => {
    testCase(searchMatrix)
  })

  describe('一次二分查找', () => {
    testCase(searchMatrix2)
  })
})

function testCase(fn: (matrix: number[][], target: number) => boolean) {
  it.each([
    [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3, true,
    ],
    [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      13, false,
    ],
  ])('示例%#', (matrix, target, expected) => {
    expect(fn(matrix, target)).toBe(expected)
  })
}
