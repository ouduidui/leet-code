import { describe, expect, it } from 'vitest'
import { removeElement } from '.'

describe('移除元素', () => {
  describe('示例一', () => {
    testCase(removeElement)
  })
})

function testCase(fn: (nums: number[], val: number) => number) {
  it.each([
    [[3, 2, 2, 3], 3, [2, 2], 2],
    [[0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 3, 0, 4], 5],
  ])('示例%#', (nums, val, expectedNums, expected) => {
    const ans = fn(nums, val)
    expect(ans).toBe(expected)
    expect(nums).toEqual(expectedNums)
  })
}
