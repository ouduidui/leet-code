import { describe, expect, it } from 'vitest'
import { rotate, rotate2, rotate3 } from '.'
// need refactor
describe('轮转数组', () => {
  describe('使用额外的数组', () => {
    testCase(rotate)
  })

  describe('环形替换', () => {
    testCase(rotate2)
  })

  describe('数组翻转', () => {
    testCase(rotate3)
  })
})

function testCase(fn: (nums: number[], k: number) => void) {
  it('示例一', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    fn(nums, k)

    expect(nums).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
  })

  it('示例二', () => {
    const nums = [-1, -100, 3, 99]
    const k = 2
    fn(nums, k)

    expect(nums).toStrictEqual([3, 99, -1, -100])
  })
}
