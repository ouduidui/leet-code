import { describe, expect, it } from 'vitest'
import { projectionArea } from '.'

describe('三维形体投影面积', () => {
  testCase(projectionArea)
})

function testCase(fn: (grid: number[][]) => number) {
  it.each([
    [[[1, 2], [3, 4]], 17],
    [[[2]], 5],
    [[[1, 0], [0, 2]], 8],
  ])('示例%#', (grid, expected) => {
    expect(fn(grid)).toBe(expected)
  })
}
