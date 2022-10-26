import { describe, expect, it } from 'vitest'
import { shortestSubarray } from '.'

describe('和至少为 K 的最短子数组', () => {
  testCase(shortestSubarray)
})

function testCase(fn: typeof shortestSubarray) {
  it.each([
    [[1], 1, 1],
    [[1, 2], 4, -1],
    [[2, -1, 2], 3, 3],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected)
  })
}
