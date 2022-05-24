import { describe, expect, it } from 'vitest'
import { optimalDivision } from '.'

describe('最优除法', () => {
  testCase(optimalDivision)
})

function testCase(fn: (nums: number[]) => string) {
  it.each([
    [
      [1000, 100, 10, 2],
      '1000/(100/10/2)',
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
