import { describe, expect, it } from 'vitest'
import { findPeakElement, findPeakElement2, findPeakElement3 } from '.'
// need refactor
describe('寻找峰值', () => {
  describe('找到最大值', () => {
    testCase(findPeakElement)
  })

  describe('迭代爬坡', () => {
    testCase(findPeakElement2)
  })

  describe('二分查找', () => {
    testCase(findPeakElement3)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [1, 2, 3, 1]
    const expected = 2
    expect(fn(nums)).toBe(expected)
  })

  it('示例二', () => {
    const nums = [1, 2, 1, 3, 5, 6, 4]
    expect([1, 5]).toContain(fn(nums))
  })
}
