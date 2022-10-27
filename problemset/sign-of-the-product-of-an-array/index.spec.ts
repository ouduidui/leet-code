import { describe, expect, it } from 'vitest'
import { arraySign } from '.'

describe('数组元素积的符号', () => {
  testCase(arraySign)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[-1, -2, -3, -4, 3, 2, 1], 1],
    [[1, 5, 0, 2, -3], 0],
    [[-1, 1, -1, 1, -1], -1],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
