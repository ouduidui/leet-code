import { describe, expect, it } from 'vitest'
import { hIndex } from '.'

describe('H指数', () => {
  describe('排序', () => {
    testCase(hIndex)
  })

  describe('计数排序', () => {
    testCase(hIndex)
  })
})

function testCase(fn: (citations: number[]) => number) {
  it.each([
    [[3, 0, 6, 1, 5], 3],
    [[1, 3, 1], 1],
  ])('示例%#', (citations, expected) => {
    expect(fn(citations)).toBe(expected)
  })
}
