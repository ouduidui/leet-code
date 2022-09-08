import { describe, expect, it } from 'vitest'
import { constructArray } from '.'

describe('优美的排列 II', () => {
  testCase(constructArray)
})

function testCase(fn: (n: number, k: number) => number[]) {
  it.each([
    [
      3, 1, [1, 2, 3],
    ],
    [3, 2, [1, 3, 2]],
  ])('示例%#', (n, k, expected) => {
    expect(fn(n, k)).toStrictEqual(expected)
  })
}
