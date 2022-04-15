import { describe, expect, it } from 'vitest'
import { myPow } from '.'

describe('Pow(x, n)', () => {
  describe('迭代', () => {
    testCase(myPow)
  })
})

function testCase(fn: (x: number, n: number) => number) {
  it.each([
    [2.0, 10, 1024.0],
    [2.1, 3, 9.261],
    [2.0, -2, 0.25],
  ])('示例%#', (x, n, expected) => {
    expect(fn(x, n)).toBe(expected)
  })
}
