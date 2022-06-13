import { describe, expect, it } from 'vitest'
import { heightChecker, heightChecker2 } from '.'

describe('高度检查器', () => {
  describe('基于比较的排序', () => {
    testCase(heightChecker)
  })

  describe('计数排序', () => {
    testCase(heightChecker2)
  })
})

function testCase(fn: (heights: number[]) => number) {
  it.each([
    [[1, 1, 4, 2, 1, 3], 3],
    [[5, 1, 2, 3, 4], 5],
    [[1, 2, 3, 4, 5], 0],
  ])('示例%#', (heights, expected) => {
    expect(fn(heights)).toBe(expected)
  })
}
