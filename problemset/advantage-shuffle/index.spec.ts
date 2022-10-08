import { describe, expect, it } from 'vitest'
import { advantageCount } from '.'

describe('优势洗牌', () => {
  testCase(advantageCount)
})

function testCase(fn: (nums1: number[], nums2: number[]) => number[]) {
  it.each([
    [[2, 7, 11, 15], [1, 10, 4, 11], [2, 11, 7, 15]],
    [[12, 24, 8, 32], [13, 25, 32, 11], [24, 32, 8, 12]],
  ])('示例%#', (nums1, nums2, expected) => {
    expect(fn(nums1, nums2)).toStrictEqual(expected)
  })
}
