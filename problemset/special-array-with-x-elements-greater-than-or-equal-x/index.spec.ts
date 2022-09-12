import { describe, expect, it } from 'vitest'
import { specialArray } from '.'

describe('特殊数组的特征值', () => {
  testCase(specialArray)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [
      [3, 5],
      2,
    ],
    [
      [0, 0],
      -1,
    ],
    [
      [0, 4, 3, 0, 4],
      3,
    ],
    [
      [3, 6, 7, 7, 0],
      -1,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
