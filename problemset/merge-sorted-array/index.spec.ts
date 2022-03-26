import { describe, expect, it } from 'vitest'
import { merge } from '.'

describe('合并两个有序数组', () => {
  testCase(merge)
})

function testCase(
  fn: (nums1: number[], m: number, nums2: number[], n: number) => void,
) {
  it.each([
    [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
    [[1], 1, [], 0, [1]],
    [[0], 0, [1], 1, [1]],
  ])('示例%#', (nums1, m, nums2, n, expected) => {
    fn(nums1, m, nums2, n)
    expect(nums1).toStrictEqual(expected)
  })
}
