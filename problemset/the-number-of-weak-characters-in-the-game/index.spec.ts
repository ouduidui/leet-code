import { describe, expect, it } from 'vitest'
import { numberOfWeakCharacters, numberOfWeakCharacters2 } from '.'

describe('游戏中弱角色的数量', () => {
  describe('暴力解法', () => {
    testCase(numberOfWeakCharacters)
  })

  describe('排序', () => {
    testCase(numberOfWeakCharacters2)
  })
})

function testCase(fn: (properties: number[][]) => number) {
  it.each([
    [
      [
        [5, 5],
        [6, 3],
        [3, 6],
      ],
      0,
    ],
    [
      [
        [2, 2],
        [3, 3],
      ],
      1,
    ],
    [
      [
        [1, 5],
        [10, 4],
        [4, 3],
      ],
      1,
    ],
    [
      [
        [7, 7],
        [1, 2],
        [9, 7],
        [7, 3],
        [3, 10],
        [9, 8],
        [8, 10],
        [4, 3],
        [1, 5],
        [1, 5],
      ],
      6,
    ],
  ])('示例%#', (properties, expected) => {
    expect(fn(properties)).toBe(expected)
  })
}
