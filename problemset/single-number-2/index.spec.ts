import { describe, expect, it } from 'vitest'
import { singleNumber, singleNumber2, singleNumber3, singleNumber4 } from '.'

describe('只出现一次的数字 II', () => {
  describe('哈希表', () => {
    testCase(singleNumber)
  })

  describe('依次确定每一个二进制位', () => {
    testCase(singleNumber2)
  })

  describe('数字电路设计', () => {
    testCase(singleNumber3)
  })

  describe('数字电路设计优化', () => {
    testCase(singleNumber4)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[2, 2, 3, 2], 3],
    [[0, 1, 0, 1, 0, 1, 99], 99],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
