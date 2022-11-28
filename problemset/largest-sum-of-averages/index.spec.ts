import { describe, expect, it } from 'vitest'
import { largestSumOfAverages } from '.'

describe('最大平均值和的分组', () => {
  testCase(largestSumOfAverages)
})

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    [[9, 1, 2, 3, 9], 3, 20],
    [[1, 2, 3, 4, 5, 6, 7], 4, 20.5],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
