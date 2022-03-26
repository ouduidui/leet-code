import { describe, expect, it } from 'vitest'
import { lengthOfLIS, lengthOfLIS2 } from '.'
// need refactor
describe('最长递增子序列', () => {
  describe('动态规划', () => {
    testCase(lengthOfLIS)
  })

  describe('贪心 + 二分查找', () => {
    testCase(lengthOfLIS2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [10, 9, 2, 5, 3, 7, 101, 18]
    const expected = 4
    expect(fn(nums)).toBe(expected)
  })

  it('示例二', () => {
    const nums = [0, 1, 0, 3, 2, 3]
    const expected = 4
    expect(fn(nums)).toBe(expected)
  })

  it('示例三', () => {
    const nums = [7, 7, 7, 7, 7, 7, 7]
    const expected = 1
    expect(fn(nums)).toBe(expected)
  })
}
