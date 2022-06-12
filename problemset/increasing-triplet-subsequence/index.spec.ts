import { describe, expect, it } from 'vitest'
import { increasingTriplet } from '.'

describe('递增的三元子序列', () => {
  testCase(increasingTriplet)
})

function testCase(fn: (nums: number[]) => boolean) {
  it.each([
    [
      [1, 2, 3, 4, 5],
      true,
    ],
    [
      [5, 4, 3, 2, 1],
      false,
    ],
    [
      [2, 1, 5, 0, 4, 6],
      true,
    ],
    [
      [0, 4, 2, 1, 0, -1, -3],
      false,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
