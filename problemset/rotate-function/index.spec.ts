import { describe, expect, it } from 'vitest'
import { maxRotateFunction } from '.'

describe('旋转函数', () => {
  testCase(maxRotateFunction)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[4, 3, 2, 6], 26],
    [[100], 0],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
