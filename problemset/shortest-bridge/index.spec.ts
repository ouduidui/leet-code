import { describe, expect, it } from 'vitest'
import { shortestBridge } from '.'

describe('最短的桥', () => {
  testCase(shortestBridge)
})

function testCase(fn: typeof shortestBridge) {
  it.each([
    [[[0, 1], [1, 0]], 1],
    [[[0, 1, 0], [0, 0, 0], [0, 0, 1]], 2],
    [[[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]], 1],
  ])('示例%#', (grid, expected) => {
    expect(fn(grid)).toBe(expected)
  })
}
