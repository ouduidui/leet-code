import { describe, expect, it } from 'vitest'
import { minEatingSpeed } from '.'

describe('爱吃香蕉的珂珂', () => {
  testCase(minEatingSpeed)
})

function testCase(fn: (piles: number[], h: number) => number) {
  it.each([
    [
      [3, 6, 7, 11],
      8,
      4,
    ],
    [
      [30, 11, 23, 4, 20],
      5,
      30,
    ],
    [
      [30, 11, 23, 4, 20],
      6,
      23,
    ],
  ])('示例%#', (piles, h, expected) => {
    expect(fn(piles, h)).toBe(expected)
  })
}
