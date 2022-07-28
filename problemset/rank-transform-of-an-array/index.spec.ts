import { describe, expect, it } from 'vitest'
import { arrayRankTransform } from '.'

describe('数组序号转换', () => {
  testCase(arrayRankTransform)
})

function testCase(fn: (arr: number[]) => number[]) {
  it.each([
    [
      [40, 10, 20, 30],
      [4, 1, 2, 3],
    ],
    [
      [100, 100, 100],
      [1, 1, 1],
    ],
    [
      [37, 12, 28, 9, 100, 56, 80, 5, 12],
      [5, 3, 4, 2, 8, 6, 7, 1, 3],
    ],
  ])('示例%#', (arr, expected) => {
    expect(fn(arr)).toStrictEqual(expected)
  })
}
