import { describe, expect, it } from 'vitest'
import { splitArraySameAverage, splitArraySameAverage2 } from '.'

describe('数组的均值分割', () => {
  describe('折半搜索', () => testCase(splitArraySameAverage))
  describe('动态规划', () => testCase(splitArraySameAverage2))
})

function testCase(fn: (nums: number[]) => boolean) {
  it.each([
    [[1, 2, 3, 4, 5, 6, 7, 8], true],
    [[3, 1], false],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
