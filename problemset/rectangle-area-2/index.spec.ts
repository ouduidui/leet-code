import { describe, expect, it } from 'vitest'
import { rectangleArea } from '.'

describe('矩形面积 II', () => {
  testCase(rectangleArea)
})

function testCase(fn: (rectangles: number[][]) => number) {
  it.each([
    [
      [[0, 0, 2, 2], [1, 0, 2, 3], [1, 0, 3, 1]],
      6,
    ],
    [
      [[0, 0, 1000000000, 1000000000]],
      49,
    ],
  ])('示例%#', (rectangle, expected) => {
    expect(fn(rectangle)).toBe(expected)
  })
}
