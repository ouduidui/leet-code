import { describe, expect, it } from 'vitest'
import { removeElement } from '.'
// need refactor
describe('移除元素', () => {
  describe('示例一', () => {
    testCase(removeElement)
  })
})

function testCase(fn: (nums: number[], val: number) => number) {
  it('示例一', () => {
    const nums: number[] = [3, 2, 2, 3]
    const val = 3
    const expected = 2
    const expectedNums: number[] = [2, 2]

    const ans = fn(nums, val)
    expect(ans).toBe(expected)
    expect(nums).toEqual(expectedNums)
  })

  it('示例一', () => {
    const nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2
    const expected = 5
    const expectedNums: number[] = [0, 1, 3, 0, 4]

    const ans = fn(nums, val)
    expect(ans).toBe(expected)
    expect(nums).toEqual(expectedNums)
  })
}
