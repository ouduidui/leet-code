import { describe, expect, it } from 'vitest'
import { canCompleteCircuit, canCompleteCircuit2 } from '.'
// need refactor
describe('加油站', () => {
  describe('暴力解法', () => {
    testCase(canCompleteCircuit)
  })

  describe('一次遍历', () => {
    testCase(canCompleteCircuit2)
  })
})

function testCase(fn: (gas: number[], cost: number[]) => number) {
  it('示例一', () => {
    const gas = [1, 2, 3, 4, 5]
    const cost = [3, 4, 5, 1, 2]
    const expected = 3
    expect(fn(gas, cost)).toBe(expected)
  })

  it('示例二', () => {
    const gas = [2, 3, 4]
    const cost = [3, 4, 3]
    const expected = -1
    expect(fn(gas, cost)).toBe(expected)
  })
}
