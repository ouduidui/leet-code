import { describe, expect, it } from 'vitest'
import { wiggleSort, wiggleSort2 } from '.'

describe('摆动排序 II', () => {
  describe('排序', () => {
    testCase(wiggleSort)
  })

  describe('快速排序 + 中位数', () => {
    testCase(wiggleSort2)
  })
})

function testCase(fn: (nums: number[]) => void) {
  it.each([
    [
      [1, 5, 1, 1, 6, 4],
      [
        [1, 6, 1, 5, 1, 4],
        [1, 4, 1, 5, 1, 6],
        [1, 5, 1, 6, 1, 4],
      ],
    ],
    [
      [1, 3, 2, 2, 3, 1],
      [
        [2, 3, 1, 3, 1, 2],
      ],
    ],
    [
      [1, 1, 2, 2, 2, 1],
      [
        [1, 2, 1, 2, 1, 2],
      ],
    ],
  ])('示例%#', (nums, expected) => {
    fn(nums)
    expect(expected).toContainEqual(nums)
  })
}
