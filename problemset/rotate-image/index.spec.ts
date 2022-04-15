import { describe, expect, it } from 'vitest'
import { rotate, rotate2, rotate3 } from '.'

describe('旋转图片', () => {
  describe('使用辅助数组', () => {
    testCase(rotate)
  })

  describe('原地旋转', () => {
    testCase(rotate2)
  })

  describe('用翻转代替旋转', () => {
    testCase(rotate3)
  })
})

function testCase(fn: (matrix: number[][]) => void) {
  it.each([
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    ],
    [
      [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ],
      [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
      ],

    ],
    [
      [[1]],
      [[1]],
    ],
    [
      [
        [1, 2],
        [3, 4],
      ],
      [
        [3, 1],
        [4, 2],
      ],
    ],
  ])('示例%#', (matrix, expected) => {
    fn(matrix)
    expect(matrix).toEqual(expected)
  })
}
