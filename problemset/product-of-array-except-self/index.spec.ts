import { describe, expect, it } from 'vitest'
import { productExceptSelf, productExceptSelf2, productExceptSelf3 } from '.'

describe('除自身以外数组的乘积', () => {
  describe('暴力解法', () => {
    testCase(productExceptSelf)
  })

  describe('左右乘积列表', () => {
    testCase(productExceptSelf2)
  })

  describe('左右乘积列表 - 优化', () => {
    testCase(productExceptSelf3)
  })
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    [[1, 2, 3, 4], [24, 12, 8, 6]],
    [[-1, 1, 0, -3, 3], [-0, 0, 9, -0, 0]],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected)
  })
}
