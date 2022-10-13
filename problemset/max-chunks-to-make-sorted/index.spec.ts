import { describe, expect, it } from 'vitest'
import { maxChunksToSorted } from '.'

describe('最多能完成排序的块', () => {
  testCase(maxChunksToSorted)
})

function testCase(fn: (arr: number[]) => number) {
  it.each([
    [
      [4, 3, 2, 1, 0],
      1,
    ],
    [
      [1, 0, 2, 3, 4],
      4,
    ],
  ])('示例%#', (arr, expected) => {
    expect(fn(arr)).toBe(expected)
  })
}
