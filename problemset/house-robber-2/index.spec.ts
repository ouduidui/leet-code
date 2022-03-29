import { describe, expect, it } from 'vitest'
import { rob, rob2 } from '.'

describe('打家劫舍 II', () => {
  describe('回溯', () => {
    testCase(rob)
  })

  describe('动态规划', () => {
    testCase(rob2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[2, 3, 2], 3],
    [[1, 2, 3, 1], 4],
    [[1, 2, 3], 3],
    [[1], 1],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
