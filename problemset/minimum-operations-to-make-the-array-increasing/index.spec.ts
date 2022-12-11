import { describe, expect, it } from 'vitest'
import { minOperations } from '.'

describe('最少操作使数组递增', () => {
  testCase(minOperations)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[1, 1, 1], 3],
    [[1, 5, 2, 4, 1], 14],
    [[8], 0],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
