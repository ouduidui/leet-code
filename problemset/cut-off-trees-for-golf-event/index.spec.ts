import { describe, expect, it } from 'vitest'
import { cutOffTree } from '.'

describe('为高尔夫比赛砍树', () => {
  testCase(cutOffTree)
})

function testCase(fn: (forest: number[][]) => number) {
  it.each([
    [
      [[1, 2, 3], [0, 0, 4], [7, 6, 5]],
      6,
    ],
    [
      [[1, 2, 3], [0, 0, 0], [7, 6, 5]],
      -1,
    ],
    [
      [[2, 3, 4], [0, 0, 5], [8, 7, 6]],
      6,
    ],
  ])('示例%#', (forest, expected) => {
    expect(fn(forest)).toBe(expected)
  })
}
