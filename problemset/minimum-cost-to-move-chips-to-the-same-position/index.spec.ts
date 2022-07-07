import { describe, expect, it } from 'vitest'
import { minCostToMoveChips } from '.'

describe('玩筹码', () => {
  testCase(minCostToMoveChips)
})

function testCase(fn: (position: number[]) => number) {
  it.each([
    [[1, 2, 3], 1],
    [[2, 2, 2, 3, 3], 2],
    [[1, 1000000000], 1],
  ])('示例%#', (position, expected) => {
    expect(fn(position)).toBe(expected)
  })
}
