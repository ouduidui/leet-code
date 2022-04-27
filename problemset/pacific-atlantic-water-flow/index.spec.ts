import { describe, expect, it } from 'vitest'
import { pacificAtlantic, pacificAtlantic2 } from '.'

describe('太平洋大西洋水流问题', () => {
  describe('深度优先搜索', () => {
    testCase(pacificAtlantic)
  })

  describe('广度优先搜索', () => {
    testCase(pacificAtlantic2)
  })
})

function testCase(fn: (heights: number[][]) => number[][]) {
  it.each([
    [
      [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
      ],
      [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]],
    ],
    [
      [
        [2, 1],
        [1, 2],
      ],
      [[0, 0], [0, 1], [1, 0], [1, 1]],
    ],
  ])('示例%#', (heights, expected) => {
    expect(fn(heights)).toStrictEqual(expected)
  })
}
