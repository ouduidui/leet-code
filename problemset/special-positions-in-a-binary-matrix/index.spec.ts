import { describe, expect, it } from 'vitest'
import { numSpecial, numSpecial2 } from '.'

describe('二进制矩阵中的特殊位置', () => {
  describe('模拟', () => testCase(numSpecial))
  describe('列的标记值', () => testCase(numSpecial2))
})

function testCase(fn: (mat: number[][]) => number) {
  it.each([
    [
      [
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
      ],
      1,
    ],
    [
      [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      3,
    ],
    [
      [
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      2,
    ],
    [
      [
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1],
      ],
      3,
    ],
  ])('示例%#', (mat, expected) => {
    expect(fn(mat)).toBe(expected)
  })
}
