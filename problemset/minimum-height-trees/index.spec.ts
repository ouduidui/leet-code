import { describe, expect, it } from 'vitest'
import { findMinHeightTrees } from '.'

describe('最小高度树', () => {
  testCase(findMinHeightTrees)
})

function testCase(fn: (n: number, edges: number[][]) => number[]) {
  it.each([
    [4, [[1, 0], [1, 2], [1, 3]], [1]],
    [6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]], [3, 4]],
  ])('示例%#', (n, edges, expected) => {
    expect(fn(n, edges)).toStrictEqual(expected)
  })
}
