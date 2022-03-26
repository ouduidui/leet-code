import { describe, expect, it } from 'vitest'
import { candy, candy2 } from '.'

describe('分发糖果', () => {
  describe('两次遍历', () => {
    testCase(candy)
  })

  describe('常数空间遍历', () => {
    testCase(candy2)
  })
})

function testCase(fn: (ratings: number[]) => number) {
  it.each([
    [[1, 0, 2], 5],
    [[1, 2, 2], 4],
    [[1, 3, 2, 2, 1], 7],
  ])('示例%#', (ratings, expected) => {
    expect(fn(ratings)).toBe(expected)
  })
}
