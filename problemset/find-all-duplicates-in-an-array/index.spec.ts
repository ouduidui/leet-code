import { describe, expect, it } from 'vitest'
import { findDuplicates, findDuplicates2 } from '.'

describe('数组中重复的数据', () => {
  describe('将元素交换到对应的位置', () => {
    testCase(findDuplicates)
  })

  describe('使用正负号作为标记', () => {
    testCase(findDuplicates2)
  })
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    [
      [4, 3, 2, 7, 8, 2, 3, 1],
      [2, 3],
    ],
    [
      [1, 1, 2],
      [1],
    ],
    [
      [1],
      [],
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums).sort()).toStrictEqual(expected.sort())
  })
}
