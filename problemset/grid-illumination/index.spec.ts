import { describe, expect, it } from 'vitest'
import { gridIllumination } from '.'

describe('网格照明', () => {
  testCase(gridIllumination)
})

function testCase(
  fn: (n: number, lamps: number[][], queries: number[][]) => number[],
) {
  it.each([
    [
      5,
      [
        [0, 0],
        [4, 4],
      ],
      [
        [1, 1],
        [1, 0],
      ],
      [1, 0],
    ],
    [
      5,
      [
        [0, 0],
        [4, 4],
      ],
      [
        [1, 1],
        [1, 1],
      ],
      [1, 1],
    ],
    [
      5,
      [
        [0, 0],
        [0, 4],
      ],
      [
        [0, 4],
        [0, 1],
        [1, 4],
      ],
      [1, 1, 0],
    ],
  ])('示例%#', (n, lamps, queries, expected) => {
    expect(fn(n, lamps, queries)).toStrictEqual(expected)
  })
}
