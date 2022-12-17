import { describe, expect, it } from 'vitest'
import { canChoose } from '.'

describe('通过连接另一个数组的子数组得到一个数组', () => {
  testCase(canChoose)
})

function testCase(fn: (groups: number[][], nums: number[]) => boolean) {
  it.each([
    [[[1, -1, -1], [3, -2, 0]], [1, -1, 0, 1, -1, -1, 3, -2, 0], true],
    [[[10, -2], [1, 2, 3, 4]], [1, 2, 3, 4, 10, -2], false],
    [[[1, 2, 3], [3, 4]], [7, 7, 1, 2, 3, 4, 7, 7], false],
  ])('示例%#', (groups, nums, expected) => {
    expect(fn(groups, nums)).toBe(expected)
  })
}
