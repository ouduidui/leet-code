import { describe, expect, it } from 'vitest'
import { twoSum, twoSum2 } from '.'

describe('两数之和', () => {
  describe('暴力解法', () => {
    testCase(twoSum)
  })
  describe('哈希表', () => {
    testCase(twoSum2)
  })
})

function testCase(fn: (nums: number[], target: number) => number[]) {
  it.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
  ])('示例%#', (nums, target, expected) => {
    expect(fn(nums, target)).toEqual(expected)
  })
}
