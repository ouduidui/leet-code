import { describe, expect, it } from 'vitest'
import { findLongestChain, findLongestChain2, findLongestChain3 } from '.'

describe('最长数对链', () => {
  describe('动态规划', () => testCase(findLongestChain))
  describe('最长递增子序列', () => testCase(findLongestChain2))
  describe('贪心算法', () => testCase(findLongestChain3))
})

function testCase(fn: (pairs: number[][]) => number) {
  it.each([
    [
      [[1, 2], [2, 3], [3, 4]],
      2,
    ],
  ])('示例%#', (pairs, expected) => {
    expect(fn(pairs)).toBe(expected)
  })
}
