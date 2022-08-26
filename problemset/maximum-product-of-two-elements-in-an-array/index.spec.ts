import { describe, expect, it } from 'vitest'
import { maxProduct, maxProduct2 } from '.'

describe('数组中的两元素的最大乘积', () => {
  describe('排序', () => testCase(maxProduct))
  describe('一次遍历', () => testCase(maxProduct2))
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [
      [3, 4, 5, 2],
      12,
    ],
    [
      [1, 5, 4, 5],
      16,
    ],
    [
      [3, 7],
      12,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
