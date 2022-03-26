import { describe, expect, it } from 'vitest'
import { searchRange } from '.'
// need refactor
describe('在排序数组中查找元素的第一个和最后一个位置', () => {
  describe('二分法', () => {
    testCase(searchRange)
  })
})

function testCase(fn: (nums: number[], target: number) => number[]) {
  it('示例一', () => {
    const nums: number[] = [5, 7, 7, 8, 8, 10]
    const target = 8
    const expected: [number, number] = [3, 4]

    expect(fn(nums, target)).toEqual(expected)
  })

  it('示例二', () => {
    const nums: number[] = [5, 7, 7, 8, 8, 10]
    const target = 6
    const expected: [number, number] = [-1, -1]

    expect(fn(nums, target)).toEqual(expected)
  })

  it('示例一', () => {
    const nums: number[] = []
    const target = 0
    const expected: [number, number] = [-1, -1]

    expect(fn(nums, target)).toEqual(expected)
  })
}
