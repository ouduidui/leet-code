import { describe, expect, it } from 'vitest'
import { mincostToHireWorkers } from '.'

describe('雇佣 K 名工人的最低成本', () => {
  testCase(mincostToHireWorkers)
})

function testCase(fn: (quality: number[], wage: number[], k: number) => number) {
  it.each([
    [
      [10, 20, 5],
      [70, 50, 30],
      2,
      105,
    ],
    [
      [3, 1, 10, 10, 1],
      [4, 8, 2, 2, 7],
      3,
      30.66667,
    ],
  ])('示例%#', (quality, wage, k, expected) => {
    expect(fn(quality, wage, k)).toBe(expected)
  })
}
