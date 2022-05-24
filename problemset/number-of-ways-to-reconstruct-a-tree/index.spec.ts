import { describe, expect, it } from 'vitest'
import { checkWays } from '.'

describe('重构一棵树的方案数', () => {
  testCase(checkWays)
})

function testCase(fn: (pairs: number[][]) => number) {
  it.each([
    [
      [
        [1, 2],
        [2, 3],
      ],
      1,
    ],
    [
      [
        [1, 2],
        [2, 3],
        [1, 3],
      ],
      2,
    ],
    [
      [
        [1, 2],
        [2, 3],
        [2, 4],
        [1, 5],
      ],
      0,
    ],
  ])('示例%#', (pairs, expected) => {
    expect(fn(pairs)).toBe(expected)
  })
}
