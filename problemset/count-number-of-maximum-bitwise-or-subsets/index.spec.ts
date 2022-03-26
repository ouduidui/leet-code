import { describe, expect, it } from 'vitest'
import { countMaxOrSubsets, countMaxOrSubsets2 } from '.'

describe('统计按位或能得到最大值的子集数目', () => {
  describe('回溯', () => {
    testCase(countMaxOrSubsets)
  })

  describe('位运算', () => {
    testCase(countMaxOrSubsets2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[3, 1], 2],
    [[2, 2, 2], 7],
    [[3, 2, 1, 5], 6],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
