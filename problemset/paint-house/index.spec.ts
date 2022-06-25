import { describe, expect, it } from 'vitest'
import { minCost } from '.'

describe('粉刷房子', () => {
  testCase(minCost)
})

function testCase(fn: (costs: number[][]) => number) {
  it.each([
    [
      [[17, 2, 17], [16, 16, 5], [14, 3, 19]],
      10,
    ],
    [
      [[7, 6, 2]],
      2,
    ],
  ])('示例%#', (costs, expected) => {
    expect(fn(costs)).toBe(expected)
  })
}
