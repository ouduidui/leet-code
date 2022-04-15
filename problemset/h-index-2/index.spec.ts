import { describe, expect, it } from 'vitest'
import { hIndex } from '.'

describe('H指数 II', () => {
  testCase(hIndex)
})

function testCase(fn: (citations: number[]) => number) {
  it.each([
    [[0, 1, 3, 5, 6], 3],
    [[1, 2, 100], 2],
  ])('示例%#', (citations, expected) => {
    expect(fn(citations)).toBe(expected)
  })
}
