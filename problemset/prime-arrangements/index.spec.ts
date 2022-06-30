import { describe, expect, it } from 'vitest'
import { numPrimeArrangements } from '.'

describe('质数排列', () => {
  testCase(numPrimeArrangements)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [5, 12],
    [100, 682289015],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
