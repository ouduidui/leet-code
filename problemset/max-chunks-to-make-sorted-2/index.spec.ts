import { describe, expect, it } from 'vitest'
import { maxChunksToSorted, maxChunksToSorted2 } from '.'

describe('最多能完成排序的块 II', () => {
  describe('哈希表+排序', () => testCase(maxChunksToSorted))
  describe('单调栈', () => testCase(maxChunksToSorted2))
})

function testCase(fn: (arr: number[]) => number) {
  it.each([
    [
      [5, 4, 3, 2, 1],
      1,
    ],
    [
      [2, 1, 3, 4, 4],
      4,
    ],
  ])('示例%#', (arr, expected) => {
    expect(fn(arr)).toBe(expected)
  })
}
