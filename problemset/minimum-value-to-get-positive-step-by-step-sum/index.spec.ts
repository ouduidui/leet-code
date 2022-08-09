import { describe, expect, it } from 'vitest'
import { minStartValue } from '.'

describe('逐步求和得到正数的最小值', () => {
  testCase(minStartValue)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [
      [-3, 2, -3, 4, 2],
      5,
    ],
    [
      [1, 2],
      1,
    ],
    [
      [1, -2, -3],
      5,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
