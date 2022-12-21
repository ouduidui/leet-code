import { describe, expect, it } from 'vitest'
import { maximumScore } from '.'

describe('移除石子的最大得分', () => {
  testCase(maximumScore)
})

function testCase(fn: (a: number, b: number, c: number) => number) {
  it.each([
    [2, 4, 6, 6],
    [4, 4, 6, 7],
    [1, 8, 8, 8],
  ])('示例%#', (a, b, c, expected) => {
    expect(fn(a, b, c)).toBe(expected)
  })
}
