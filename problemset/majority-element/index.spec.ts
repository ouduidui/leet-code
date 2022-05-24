import { describe, expect, it } from 'vitest'
import {
  majorityElement,
  majorityElement2,
  majorityElement3,
  majorityElement4,
} from '.'

describe('多数元素', () => {
  describe('哈希表', () => {
    testCase(majorityElement)
  })

  describe('排序', () => {
    testCase(majorityElement2)
  })

  describe('分治法', () => {
    testCase(majorityElement3)
  })

  describe('Boyer-Moore 投票算法', () => {
    testCase(majorityElement4)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[3, 2, 3], 3],
    [[2, 2, 1, 1, 1, 2, 2], 2],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
