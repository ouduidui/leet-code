import { describe, expect, it } from 'vitest'
import { rob, rob2 } from '.'

describe('打家劫舍', () => {
  describe('回溯', () => {
    testCase(rob)
  })
  describe('动态规划', () => {
    testCase(rob2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[1, 2, 3, 1], 4],
    [[2, 7, 9, 3, 1], 12],
    [[1, 2], 2],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
