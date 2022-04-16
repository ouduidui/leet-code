import { describe, expect, it } from 'vitest'
import { canCompleteCircuit, canCompleteCircuit2 } from '.'

describe('加油站', () => {
  describe('暴力解法', () => {
    testCase(canCompleteCircuit)
  })

  describe('一次遍历', () => {
    testCase(canCompleteCircuit2)
  })
})

function testCase(fn: (gas: number[], cost: number[]) => number) {
  it.each([
    [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2], 3],
    [[2, 3, 4], [3, 4, 3], -1],
  ])('示例%#', (gas, cost, expected) => {
    expect(fn(gas, cost)).toBe(expected)
  })
}
