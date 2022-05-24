import { describe, expect, it } from 'vitest'
import { pancakeSort } from '.'

describe('煎饼排序', () => {
  testCase(pancakeSort)
})

function testCase(fn: (arr: number[]) => number[]) {
  it.each([
    [
      [3, 2, 4, 1],
      [1, 2, 3, 4],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  ])('示例%#', (nums, expected) => {
    expect(reverse([...nums], fn(nums))).toStrictEqual(expected)
  })
}

function reverse(nums: number[], steps: number[]) {
  for (const end of steps) {
    for (let i = 0, j = end - 1; i < j; i++, j--)
      [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  return nums
}
