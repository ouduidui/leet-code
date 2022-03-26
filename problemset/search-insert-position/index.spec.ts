import { describe, expect, it } from 'vitest'
import { searchInsert } from '.'
// need refactor
describe('搜索插入位置', () => {
  describe('二分法', () => {
    testCase(searchInsert)
  })
})

function testCase(fn: (nums: number[], target: number) => number) {
  it('示例一', () => {
    const nums: number[] = [1, 3, 5, 6]
    const target = 5
    const expected = 2

    expect(fn(nums, target)).toBe(expected)
  })

  it('示例二', () => {
    const nums: number[] = [1, 3, 5, 6]
    const target = 2
    const expected = 1

    expect(fn(nums, target)).toBe(expected)
  })

  it('示例三', () => {
    const nums: number[] = [1, 3, 5, 6]
    const target = 7
    const expected = 4

    expect(fn(nums, target)).toBe(expected)
  })

  it('示例四', () => {
    const nums: number[] = [1, 3, 5, 6]
    const target = 0
    const expected = 0

    expect(fn(nums, target)).toBe(expected)
  })

  it('示例无', () => {
    const nums: number[] = [1]
    const target = 0
    const expected = 0

    expect(fn(nums, target)).toBe(expected)
  })
}
