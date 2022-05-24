import { describe, expect, it } from 'vitest'
import { numEnclaves } from '.'

describe('飞地的数量', () => {
  testCase(numEnclaves)
})

function testCase(fn: (gird: number[][]) => number) {
  it.each([
    [
      [
        [0, 0, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      3,
    ],
    [
      [
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ],
      0,
    ],
  ])('示例%#', (gird, expected) => {
    expect(fn(gird)).toBe(expected)
  })
}
