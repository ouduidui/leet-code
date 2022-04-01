import { describe, expect, it } from 'vitest'
import { containsDuplicate } from '.'

describe('存在重复元素', () => {
  testCase(containsDuplicate)
})

function testCase(fn: (nums: number[]) => boolean) {
  it.each([
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
