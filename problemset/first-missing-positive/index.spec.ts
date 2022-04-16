import { describe, expect, it } from 'vitest'
import { firstMissingPositive } from '.'

describe('缺失的第一个正数', () => {
  describe('原地哈希表', () => {
    testCase(firstMissingPositive)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[1, 2, 0], 3],
    [[3, 4, -1, 1], 2],
    [[7, 8, 9, 11, 12], 1],
    [[3, 4, -1, 1], 2],
    [[2, 2], 1],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
