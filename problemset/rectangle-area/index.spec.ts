import { describe, expect, it } from 'vitest'
import { computeArea } from '.'

describe('矩形面积', () => {
  testCase(computeArea)
})

function testCase(fn:
(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
) => number) {
  it.each([
    [-3, 0, 3, 4, 0, -1, 9, 2, 45],
    [-2, -2, 2, 2, -2, -2, 2, 2, 16],
  ])('示例%#', (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2, expected) => {
    expect(fn(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)).toBe(expected)
  })
}
