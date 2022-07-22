import { describe, expect, it } from 'vitest'
import { intersectionSizeTwo } from '.'

describe('设置交集大小至少为2', () => {
  testCase(intersectionSizeTwo)
})

function testCase(fn: (intervals: number[][]) => number) {
  it.each([
    [
      [[1, 3], [1, 4], [2, 5], [3, 5]],
      3,
    ],
    [
      [[1, 2], [2, 3], [2, 4], [4, 5]],
      5,
    ],
  ])('示例%#', (intervals, expected) => {
    expect(fn(intervals)).toBe(expected)
  })
}
