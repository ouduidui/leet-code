import { describe, expect, it } from 'vitest'
import { largestTriangleArea, largestTriangleArea2 } from '.'

describe('最大三角形面积', () => {
  describe('枚举', () => {
    testCase(largestTriangleArea)
  })

  describe('凸包', () => {
    testCase(largestTriangleArea2)
  })
})

function testCase(fn: (points: number[][]) => number) {
  it.each([
    [
      [[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]],
      2,
    ],
  ])('示例%#', (points, expected) => {
    expect(fn(points)).toBe(expected)
  })
}
