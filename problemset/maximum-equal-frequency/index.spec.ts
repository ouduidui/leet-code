import { describe, expect, it } from 'vitest'
import { maxEqualFreq } from '.'

describe('最大相等频率', () => {
  testCase(maxEqualFreq)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [
      [2, 2, 1, 1, 5, 3, 3, 5],
      7,
    ],
    [
      [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5],
      13,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
