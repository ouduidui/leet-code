import { describe, expect, it } from 'vitest'
import { luckyNumbers } from '.'
// need refactor
describe('矩阵中的幸运数', () => {
  testCase(luckyNumbers)
})

function testCase(fn: (matrix: number[][]) => number[]) {
  it('示例一', () => {
    const matrix = [
      [3, 7, 8],
      [9, 11, 13],
      [15, 16, 17],
    ]
    const expected = [15]
    expect(fn(matrix)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const matrix = [
      [1, 10, 4, 2],
      [9, 3, 8, 7],
      [15, 16, 17, 12],
    ]
    const expected = [12]
    expect(fn(matrix)).toStrictEqual(expected)
  })

  it('示例三', () => {
    const matrix = [
      [7, 8],
      [1, 2],
    ]
    const expected = [7]
    expect(fn(matrix)).toStrictEqual(expected)
  })
}
