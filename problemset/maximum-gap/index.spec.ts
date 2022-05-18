import { describe, expect, it } from 'vitest'
import { maximumGap, maximumGap2 } from '.'

describe('最大间距', () => {
  describe('基数排序', () => {
    testCase(maximumGap)
  })

  describe('基于桶的算法', () => {
    testCase(maximumGap2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[3, 6, 9, 1], 3],
    [[10], 0],
    [[1, 3, 100], 97],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
