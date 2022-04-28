import { describe, expect, it } from 'vitest'
import { sortArrayByParity, sortArrayByParity2 } from '.'

describe('按奇偶排序数组', () => {
  describe('遍历', () => {
    testCase(sortArrayByParity)
  })

  describe('原地交换', () => {
    testCase(sortArrayByParity2)
  })
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    [
      [3, 1, 2, 4],
      [
        [2, 4, 3, 1],
        [4, 2, 3, 1],
        [2, 4, 1, 3],
        [4, 2, 1, 3],
      ],
    ],
    [
      [0],
      [
        [0],
      ],
    ],
  ])('示例%#', (nums, expecteds) => {
    expect(expecteds).toContainEqual(fn(nums))
  })
}
