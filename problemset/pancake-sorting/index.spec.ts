import { describe, expect, it } from 'vitest'
import { pancakeSort } from '.'
// need refactor
describe('煎饼排序', () => {
  testCase(pancakeSort)
})

function testCase(fn: (arr: number[]) => number[]) {
  it('示例一', () => {
    const nums = [3, 2, 4, 1]
    expect(reverse([...nums], fn(nums))).toStrictEqual([1, 2, 3, 4])
  })

  it('示例二', () => {
    const nums = [1, 2, 3]
    expect(reverse([...nums], fn(nums))).toStrictEqual([1, 2, 3])
  })
}

function reverse(nums: number[], steps: number[]) {
  for (const end of steps) {
    for (let i = 0, j = end - 1; i < j; i++, j--)
      [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  return nums
}
