import { describe, expect, it } from 'vitest'
import { maxNumber } from '.'

describe('拼接最大数', () => {
  testCase(maxNumber)
})

function testCase(fn: (nums1: number[], nums2: number[], k: number) => number[]) {
  it.each([
    [
      [3, 4, 6, 5],
      [9, 1, 2, 5, 8, 3],
      5,
      [9, 8, 6, 5, 3],
    ],
    [
      [6, 7],
      [6, 0, 4],
      5,
      [6, 7, 6, 0, 4],
    ],
    [
      [3, 9],
      [8, 9],
      3,
      [9, 8, 9],
    ],
  ])('示例%#', (nums1, nums2, k, expected) => {
    expect(fn(nums1, nums2, k)).toStrictEqual(expected)
  })
}
