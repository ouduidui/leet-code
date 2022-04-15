import { describe, expect, it } from 'vitest'
import { findCenter } from '.'

describe('找出星型图的中心节点', () => {
  testCase(findCenter)
})

function testCase(fn: (edges: number[][]) => number) {
  it.each([
    [[
      [1, 2],
      [2, 3],
      [4, 2],
    ], 2],
    [[
      [1, 2],
      [5, 1],
      [1, 3],
      [1, 4],
    ], 1],
  ])('示例%#', (edges, expected) => {
    expect(fn(edges)).toBe(expected)
  })
}
