import { describe, expect, it } from 'vitest'
import { cherryPickup } from '.'

describe('摘樱桃', () => {
  testCase(cherryPickup)
})

function testCase(fn: (grid: number[][]) => number) {
  it.each([
    [
      [
        [0, 1, -1],
        [1, 0, -1],
        [1, 1, 1],
      ],
      5,
    ],
  ])('示例%#', (grid, expected) => {
    expect(fn(grid)).toBe(expected)
  })
}
