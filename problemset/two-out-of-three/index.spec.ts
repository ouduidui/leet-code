import { describe, expect, it } from 'vitest'
import { twoOutOfThree } from '.'

describe('至少在两个数组中出现的值', () => {
  testCase(twoOutOfThree)
})

function testCase(fn: (nums1: number[], nums2: number[], nums3: number[]) => number[]) {
  it.each([
    [[1, 1, 3, 2], [2, 3], [3], [3, 2]],
    [[3, 1], [2, 3], [1, 2], [2, 3, 1]],
    [[1, 2, 2], [4, 3, 3], [5], []],
  ])('示例%#', (nums1, nums2, nums3, expected) => {
    expect(fn(nums1, nums2, nums3)).toBe(expected)
  })
}
