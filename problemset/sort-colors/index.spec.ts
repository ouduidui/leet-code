import { describe, expect, it } from 'vitest'
import { sortColors, sortColors2 } from '.'
// need refactor
describe('颜色分类', () => {
  describe('单指针', () => {
    testCase(sortColors)
  })

  describe('双指针', () => {
    testCase(sortColors2)
  })
})

function testCase(fn: (nums: number[]) => void) {
  it('示例一', () => {
    const nums = [2, 0, 2, 1, 1, 0]
    const expected = [0, 0, 1, 1, 2, 2]
    fn(nums)
    expect(nums).toStrictEqual(expected)
  })

  it('示例二', () => {
    const nums = [2, 0, 1]
    const expected = [0, 1, 2]
    fn(nums)
    expect(nums).toStrictEqual(expected)
  })

  it('示例三', () => {
    const nums = [0]
    const expected = [0]
    fn(nums)
    expect(nums).toStrictEqual(expected)
  })

  it('示例四', () => {
    const nums = [1]
    const expected = [1]
    fn(nums)
    expect(nums).toStrictEqual(expected)
  })
}
