import { describe, expect, it } from 'vitest'
import { validSquare } from '.'

describe('有效的正方形', () => {
  testCase(validSquare)
})

function testCase(fn: (p1: number[], p2: number[], p3: number[], p4: number[]) => boolean) {
  it.each([
    [
      [0, 0], [1, 1], [1, 0], [0, 1],
      true,
    ],
    [
      [0, 0], [1, 1], [1, 0], [0, 12],
      false,
    ],
    [
      [1, 0], [-1, 0], [0, 1], [0, -1],
      true,
    ],
  ])('示例%#', (p1, p2, p3, p4, expected) => {
    expect(fn(p1, p2, p3, p4)).toBe(expected)
  })
}
