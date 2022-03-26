import { describe, expect, it } from 'vitest'
import { bestRotation, bestRotation2 } from '.'
// need refactor
describe('得分最高的最小轮调', () => {
  describe('暴力解法', () => {
    testCase(bestRotation)
  })

  describe('差分数组', () => {
    testCase(bestRotation2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [2, 3, 1, 4, 0]
    const expected = 3
    expect(fn(nums)).toBe(expected)
  })

  it('示例二', () => {
    const nums = [1, 3, 0, 2, 4]
    const expected = 0
    expect(fn(nums)).toBe(expected)
  })
}
