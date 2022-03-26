import { describe, expect, it } from 'vitest'
import { maximumDifference, maximumDifference2 } from '.'
// need refactor
describe('增量元素之间的最大差值', () => {
  describe('暴力解法', () => {
    testCase(maximumDifference)
  })

  describe('前缀最小值', () => {
    testCase(maximumDifference2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [7, 1, 5, 4]
    const expected = 4
    expect(fn(nums)).toBe(expected)
  })

  it('示例二', () => {
    const nums = [9, 4, 3, 2]
    const expected = -1
    expect(fn(nums)).toBe(expected)
  })

  it('示例三', () => {
    const nums = [1, 5, 2, 10]
    const expected = 9
    expect(fn(nums)).toBe(expected)
  })
}
