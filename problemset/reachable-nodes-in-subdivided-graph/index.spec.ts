import { describe, expect, it } from 'vitest'
import { reachableNodes } from '.'

describe('细分图中的可到达节点', () => {
  testCase(reachableNodes)
})

function testCase(fn: (edges: number[][], maxMoves: number, n: number) => number) {
  it.each([
    [[[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6, 3, 13],
    [[[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], 10, 4, 23],
    [[[1, 2, 4], [1, 4, 5], [1, 3, 1], [2, 3, 4], [3, 4, 5]], 17, 5, 1],
  ])('示例%#', (edges, maxMoves, n, expected) => {
    expect(fn(edges, maxMoves, n)).toBe(expected)
  })
}
