import { describe, expect, it } from 'vitest'
import { nthSuperUglyNumber } from '.'

describe('超级丑数', () => {
  testCase(nthSuperUglyNumber)
})

function testCase(fn: (n: number, primes: number[]) => number) {
  it.each([
    [12, [2, 7, 13, 19], 32],
    [1, [2, 3, 5], 1],
  ])('示例%#', (n, primes, expected) => {
    expect(fn(n, primes)).toBe(expected)
  })
}
