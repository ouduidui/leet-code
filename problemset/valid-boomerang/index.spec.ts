import { describe, expect, it } from 'vitest'
import { isBoomerang } from '.'

describe('有效的回旋镖', () => {
  describe('向量叉乘', () => {
    testCase(isBoomerang)
  })
})

function testCase(fn: (points: number[][]) => boolean) {
  it.each([
    [
      [[1, 1], [2, 3], [3, 2]],
      true,
    ],
    [
      [[1, 1], [2, 2], [3, 3]],
      false,
    ],
  ])('示例%#', (points, expected) => {
    expect(fn(points)).toBe(expected)
  })
}
