import { describe, expect, it } from 'vitest'
import { minPatches } from '.'

describe('按要求补齐数组', () => {
  testCase(minPatches)
})

function testCase(fn: (nums: number[], n: number) => number) {
  it.each([
    [[1, 3], 6, 1],
    [[1, 5, 10], 20, 2],
    [[1, 2, 2], 5, 0],
  ])('示例%#', (nums, n, expected) => {
    expect(fn(nums, n)).toBe(expected)
  })
}
