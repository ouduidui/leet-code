import { describe, expect, it } from 'vitest'
import { spiralOrder, spiralOrder2 } from '.'
// need refactor
describe('螺旋矩阵', () => {
  describe('模拟', () => {
    testCase(spiralOrder)
  })

  describe('按层模拟', () => {
    testCase(spiralOrder2)
  })
})

function testCase(fn: (matrix: number[][]) => number[]) {
  it('示例一', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5]

    expect(fn(matrix)).toEqual(expected)
  })

  it('示例二', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]
    const expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

    expect(fn(matrix)).toEqual(expected)
  })
}
