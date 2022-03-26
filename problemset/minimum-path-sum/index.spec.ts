import { describe, expect, it } from 'vitest'
import { minPathSum } from '.'
// need refactor
describe('最小路径和', () => {
  describe('动态规划', () => {
    testCase(minPathSum)
  })
})

function testCase(fn: (grid: number[][]) => number) {
  it('示例一', () => {
    const grid = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]
    const expected = 7

    expect(fn(grid)).toBe(expected)
  })

  it('示例二', () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const expected = 12

    expect(fn(grid)).toBe(expected)
  })
}
