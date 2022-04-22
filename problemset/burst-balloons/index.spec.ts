import { describe, expect, it } from 'vitest'
import { maxCoins, maxCoins2 } from '.'

describe('戳气球', () => {
  describe('记忆化搜索', () => {
    testCase(maxCoins)
  })

  describe('动态规划', () => {
    testCase(maxCoins2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[3, 1, 5, 8], 167],
    [[1, 5], 10],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
