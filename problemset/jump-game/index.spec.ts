import { describe, expect, it } from 'vitest'
import { canJump } from '.'

describe('跳跃游戏', () => {
  describe('贪心算法', () => {
    testCase(canJump)
  })
})

function testCase(fn: (nums: number[]) => boolean) {
  it.each([
    [[2, 3, 1, 1, 4], true],
    [[3, 2, 1, 0, 4], false],
    [[1], true],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
