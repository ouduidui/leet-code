import { describe, expect, it } from 'vitest'
import { repeatedNTimes, repeatedNTimes2 } from '.'

describe('在长度 2N 的数组中找出重复 N 次的元素', () => {
  describe('哈希表', () => {
    testCase(repeatedNTimes)
  })

  describe('数学', () => {
    testCase(repeatedNTimes2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [
      [1, 2, 3, 3],
      3,
    ],
    [
      [2, 1, 2, 5, 3, 2],
      2,
    ],
    [
      [5, 1, 5, 2, 5, 3, 5, 4],
      5,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
