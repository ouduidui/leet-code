import { describe, expect, it } from 'vitest'
import { minElements } from '.'

describe('构成特定和需要添加的最少元素', () => {
  testCase(minElements)
})

function testCase(fn: (nums: number[], limit: number, goal: number) => number) {
  it.each([
    [[1, -1, 1], 3, -4, 2],
    [[1, -10, 9, 1], 100, 0, 1],
  ])('示例%#', (nums, limit, goal, expected) => {
    expect(fn(nums, limit, goal)).toBe(expected)
  })
}
