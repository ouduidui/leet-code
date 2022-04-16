import { describe, expect, it } from 'vitest'
import { jump, jump2 } from '.'

describe('跳跃游戏 II', () => {
  describe('贪心算法 - 反向查找', () => {
    testCase(jump)
  })

  describe('贪心算法 - 正向查找', () => {
    testCase(jump2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[2, 3, 1, 1, 4], 2],
    [[2, 3, 0, 1, 4], 2],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
