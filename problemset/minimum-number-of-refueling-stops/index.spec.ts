import { describe, expect, it } from 'vitest'
import { minRefuelStops, minRefuelStops2 } from '.'

describe('最低加油次数', () => {
  describe('动态规划', () => testCase(minRefuelStops))
  describe('贪心算法', () => testCase(minRefuelStops2))
})

function testCase(fn: (target: number, startFuel: number, stations: number[][]) => number) {
  it.each([
    [1, 1, [], 0],
    [100, 1, [[10, 100]], -1],
    [100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]], 2],
  ])('示例%#', (target, startFuel, stations, expected) => {
    expect(fn(target, startFuel, stations)).toBe(expected)
  })
}
