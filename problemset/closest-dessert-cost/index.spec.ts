import { describe, expect, it } from 'vitest'
import { closestCost } from '.'

describe('最接近目标价格的甜点成本', () => {
  testCase(closestCost)
})

function testCase(fn: (baseCosts: number[], toppingCosts: number[], target: number) => number) {
  it.each([
    [[1, 7], [3, 4], 10, 10],
    [[2, 3], [4, 5, 100], 18, 17],
    [[3, 10], [2, 5], 9, 8],
    [[10], [1], 1, 10],
  ])('示例%#', (baseCosts, toppingCosts, target, expected) => {
    expect(fn(baseCosts, toppingCosts, target)).toBe(expected)
  })
}
