import { describe, expect, it } from 'vitest'
import { lenLongestFibSubseq } from '.'

describe('最长的斐波那契子序列的长度', () => {
  testCase(lenLongestFibSubseq)
})

function testCase(fn: (arr: number[]) => number) {
  it.each([
    [
      [1, 2, 3, 4, 5, 6, 7, 8],
      5,
    ],
    [
      [1, 3, 7, 11, 12, 14, 18],
      3,
    ],
  ])('示例%#', (arr, expected) => {
    expect(fn(arr)).toBe(expected)
  })
}
