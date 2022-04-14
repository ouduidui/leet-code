import { describe, expect, it } from 'vitest'
import { maximumWealth } from '.'

describe('最富有客户的资产总量', () => {
  testCase(maximumWealth)
})

function testCase(fn: (accounts: number[][]) => number) {
  it.each([
    [[[1, 2, 3], [3, 2, 1]], 6],
    [[[1, 5], [7, 3], [3, 5]], 10],
    [[[2, 8, 7], [7, 1, 3], [1, 9, 5]], 17],
  ])('示例%#', (accounts, expected) => {
    expect(fn(accounts)).toBe(expected)
  })
}
