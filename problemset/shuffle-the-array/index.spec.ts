import { describe, expect, it } from 'vitest'
import { shuffle } from '.'

describe('重新排序数组', () => {
  testCase(shuffle)
})

function testCase(fn: (nums: number[], n: number) => number[]) {
  it.each([
    [
      [2, 5, 1, 3, 4, 7],
      3,
      [2, 3, 5, 4, 1, 7],
    ],
    [
      [1, 2, 3, 4, 4, 3, 2, 1],
      4,
      [1, 4, 2, 3, 3, 2, 4, 1],
    ],
    [
      [1, 1, 2, 2],
      2,
      [1, 2, 1, 2],
    ],
  ])('示例%#', (nums, n, expected) => {
    expect(fn(nums, n)).toStrictEqual(expected)
  })
}
