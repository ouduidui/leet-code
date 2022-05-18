import { describe, expect, it } from 'vitest'
import { highestPeak } from '.'

describe('地图中的最高点', () => {
  testCase(highestPeak)
})

function testCase(fn: (isWater: number[][]) => number[][]) {
  it.each([
    [
      [
        [0, 1],
        [0, 0],
      ],
      [
        [1, 0],
        [2, 1],
      ],
    ],
    [
      [
        [0, 0, 1],
        [1, 0, 0],
        [0, 0, 0],
      ],
      [
        [1, 1, 0],
        [0, 1, 1],
        [1, 2, 2],
      ],
    ],
  ])('示例%#', (isWater, expected) => {
    expect(fn(isWater)).toStrictEqual(expected)
  })
}
