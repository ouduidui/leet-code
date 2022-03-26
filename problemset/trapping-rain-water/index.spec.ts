import { describe, expect, it } from 'vitest'
import { trap, trap2, trap3 } from '.'

describe('接雨水', () => {
  describe('动态规划', () => {
    testCase(trap)
  })

  describe('单调栈', () => {
    testCase(trap2)
  })

  describe('双指针', () => {
    testCase(trap3)
  })
})

function testCase(fn: (height: number[]) => number) {
  it.each([
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[4, 2, 0, 3, 2, 5], 9],
  ])('示例%#', (height, expected) => {
    expect(fn(height)).toBe(expected)
  })
}
