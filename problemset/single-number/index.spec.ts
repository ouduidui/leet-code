import { describe, expect, it } from 'vitest'
import { singleNumber, singleNumber2 } from '.'
// need refactor
describe('只出现一次的数字', () => {
  describe('哈希表', () => {
    testCase(singleNumber)
  })

  describe('位运算', () => {
    testCase(singleNumber2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [2, 2, 1]
    const expected = 1
    expect(fn(nums)).toBe(expected)
  })

  it('示例二', () => {
    const nums = [4, 1, 2, 1, 2]
    const expected = 4
    expect(fn(nums)).toBe(expected)
  })
}
