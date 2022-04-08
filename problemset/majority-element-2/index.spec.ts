
import { describe, expect, it } from 'vitest'
import { majorityElement, majorityElement2 } from '.'

describe('求众数 II', () => {
  describe('哈希统计', () => {
    testCase(majorityElement)
  })

  describe('摩尔投票法', () => {
    testCase(majorityElement2)
  })
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    [[3, 2, 3], [3]],
    [[1], [1]],
    [[1, 1, 1, 3, 3, 2, 2, 2], [1, 2]],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected)
  })
}
