import { describe, expect, it } from 'vitest'
import { check } from '.'

describe('检查数组是否经排序和轮转得到', () => {
  testCase(check)
})

function testCase(fn: (nums: number[]) => boolean) {
  it.each([
    [[3, 4, 5, 1, 2], true],
    [[2, 1, 3, 4], false],
    [[1, 2, 3], true],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
