import { describe, expect, it } from 'vitest'
import { countPrimes, countPrimes2 } from '.'

describe('计数质数', () => {
  describe('枚举', () => {
    testCase(countPrimes)
  })

  describe('埃氏筛', () => {
    testCase(countPrimes2)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    [10, 4],
    [0, 0],
    [1, 0],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
