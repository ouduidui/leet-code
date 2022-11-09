import { describe, expect, it } from 'vitest'
import { orderOfLargestPlusSign } from '.'

describe('最大加号标志', () => {
  testCase(orderOfLargestPlusSign)
})

function testCase(fn: (n: number, mines: number[][]) => number) {
  it.each([
    [5, [[4, 2]], 2],
    [1, [[0, 0]], 0],
  ])('示例%#', (n, mines, expected) => {
    expect(fn(n, mines)).toBe(expected)
  })
}
