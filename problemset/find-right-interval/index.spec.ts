import { describe, expect, it } from 'vitest'
import { findRightInterval, findRightInterval2 } from '.'

describe('寻找右区间', () => {
  describe('二分法', () => {
    testCase(findRightInterval)
  })

  describe('双指针', () => {
    testCase(findRightInterval2)
  })
})

function testCase(fn: (intervals: number[][]) => number[]) {
  it.each([
    [[[1, 2]], [-1]],
    [[[3, 4], [2, 3], [1, 2]], [-1, 0, 1]],
    [[[1, 4], [2, 3], [3, 4]], [-1, 2, -1]],
  ])('示例%#', (intervals, expected) => {
    expect(fn(intervals)).toStrictEqual(expected)
  })
}
