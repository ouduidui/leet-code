import { describe, expect, it } from 'vitest'
import { champagneTower } from '.'

describe('香槟塔', () => {
  testCase(champagneTower)
})

function testCase(fn: (poured: number, query_row: number, query_glass: number) => number) {
  it.each([
    [1, 1, 1, 0.0],
    [2, 1, 1, 0.5],
    [100000009, 33, 17, 1.0],
  ])('示例%#', (poured, query_row, query_glass, expected) => {
    expect(fn(poured, query_row, query_glass)).toBe(expected)
  })
}
