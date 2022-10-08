import { describe, expect, it } from 'vitest'
import { threeEqualParts } from '.'

describe('三等分', () => {
  testCase(threeEqualParts)
})

function testCase(fn: (arr: number[]) => number[]) {
  it.each([
    [
      [1, 0, 1, 0, 1],
      [0, 3],
    ],
    [
      [1, 1, 0, 1, 1],
      [-1, -1],
    ],
    [
      [1, 1, 0, 0, 1],
      [0, 2],
    ],
  ])('示例%#', (arr, expected) => {
    expect(fn(arr)).toStrictEqual(expected)
  })
}
