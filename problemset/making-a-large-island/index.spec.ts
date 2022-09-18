import { describe, expect, it } from 'vitest'
import { largestIsland } from '.'

describe('最大人工岛', () => {
  testCase(largestIsland)
})

function testCase(fn: (grid: number[][]) => number) {
  it.each([
    [
      [[1, 0], [0, 1]],
      3,
    ],
    [
      [[1, 1], [1, 0]],
      4,
    ],
    [
      [[1, 1], [1, 1]],
      4,
    ],
  ])('示例%#', (grid, expected) => {
    expect(fn(grid)).toBe(expected)
  })
}
