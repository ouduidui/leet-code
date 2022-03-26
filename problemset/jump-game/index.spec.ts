import { describe, expect, it } from 'vitest'
import { canJump } from '.'
// need refactor
describe('跳跃游戏', () => {
  describe('贪心算法', () => {
    testCase(canJump)
  })
})

function testCase(fn: (nums: number[]) => boolean) {
  it('示例一', () => {
    const nums = [2, 3, 1, 1, 4]
    const expected = true

    expect(fn(nums)).toBe(expected)
  })

  it('示例二', () => {
    const nums = [3, 2, 1, 0, 4]
    const expected = false

    expect(fn(nums)).toBe(expected)
  })

  it('示例三', () => {
    const nums = [1]
    const expected = true

    expect(fn(nums)).toBe(expected)
  })
}
