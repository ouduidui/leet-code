import { describe, expect, it } from 'vitest'
import { setZeroes, setZeroes2, setZeroes3 } from '.'

describe('零矩阵', () => {
  describe('使用标记数组', () => testCase(setZeroes))
  describe('使用两个标记变量', () => testCase(setZeroes2))
  describe('使用一个标记变量', () => testCase(setZeroes3))
})

function testCase(fn: (matrix: number[][]) => void) {
  it.each([
    [
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ],
      [
        [
          [0, 1, 2, 0],
          [3, 4, 5, 2],
          [1, 3, 1, 5],
        ],
        [
          [0, 0, 0, 0],
          [0, 4, 5, 0],
          [0, 3, 1, 0],
        ],
      ],
    ],
  ])('示例%#', (matrix, expected) => {
    fn(matrix)
    expect(matrix).toStrictEqual(expected)
  })
}
