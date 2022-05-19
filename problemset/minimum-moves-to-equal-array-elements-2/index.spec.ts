import { describe, expect, it } from 'vitest'
import { minMoves2, minMoves2_2 } from '.'

describe('最少移动次数使数组元素相等 II', () => {
  describe('排序', () => {
    testCase(minMoves2)
  })

  describe('快速选择', () => {
    testCase(minMoves2_2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[1, 2, 3], 2],
    [[1, 10, 2, 9], 16],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
