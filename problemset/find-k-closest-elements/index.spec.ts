import { describe, expect, it } from 'vitest'
import { findClosestElements, findClosestElements2 } from '.'

describe('找到 K 个最接近的元素', () => {
  describe('排序', () => testCase(findClosestElements))
  describe('二分查找 + 双指针', () => testCase(findClosestElements2))
})

function testCase(fn: (arr: number[], k: number, x: number) => number[]) {
  it.each([
    [
      [1, 2, 3, 4, 5], 4, 3, [1, 2, 3, 4],
    ],
    [
      [1, 2, 3, 4, 5], 4, -1, [1, 2, 3, 4],
    ],
  ])('示例%#', (arr, k, x, expected) => {
    expect(fn(arr, k, x)).toStrictEqual(expected)
  })
}
