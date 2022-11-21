import { describe, expect, it } from 'vitest'
import { soupServings } from '.'

describe('分汤', () => {
  testCase(soupServings)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [50, 0.625],
    [100, 0.71875],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
