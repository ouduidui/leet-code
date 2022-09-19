import { describe, expect, it } from 'vitest'
import { frequencySort } from '.'

describe('按照频率将数组升序排序', () => {
  testCase(frequencySort)
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    [
      [1, 1, 2, 2, 2, 3],
      [3, 1, 1, 2, 2, 2],
    ],
    [
      [2, 3, 1, 3, 2],
      [1, 3, 3, 2, 2],
    ],
    [
      [-1, 1, -6, 4, 5, -6, 1, 4, 1],
      [5, -1, 4, 4, -6, -6, 1, 1, 1],
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected)
  })
}
