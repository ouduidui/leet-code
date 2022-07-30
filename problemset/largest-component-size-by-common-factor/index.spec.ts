import { describe, expect, it } from 'vitest'
import { largestComponentSize } from '.'

describe('按公因数计算最大组件大小', () => {
  testCase(largestComponentSize)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [
      [4, 6, 15, 35],
      4,
    ],
    [
      [20, 50, 9, 63],
      2,
    ],
    [
      [2, 3, 6, 7, 4, 12, 21, 39],
      8,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
