import { describe, expect, it } from 'vitest'
import { singleNumber, singleNumber2 } from '.'

describe('只出现一次的数字 III', () => {
  describe('哈希表', () => {
    testCase(singleNumber)
  })

  describe('位运算', () => {
    testCase(singleNumber2)
  })
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    [[1, 2, 1, 3, 2, 5], [3, 5]],
    [[-1, 0], [-1, 0]],
    [[0, 1], [0, 1]],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums).sort()).toStrictEqual(expected.sort())
  })
}
