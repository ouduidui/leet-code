import { describe, expect, it } from 'vitest'
import { smallestRangeI } from '.'

describe('最小差值', () => {
  testCase(smallestRangeI)
})

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    [[1], 0, 0],
    [[0, 10], 2, 6],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
