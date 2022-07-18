import { describe, expect, it } from 'vitest'
import { containVirus } from '.'

describe('隔离病毒', () => {
  testCase(containVirus)
})

function testCase(fn: (isInfected: number[][]) => number) {
  it.each([
    [
      [
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ],
      10,
    ],
    [
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      4,
    ],
    [
      [
        [1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0],
      ],
      13,
    ],
  ])('示例%#', (isInfected, expected) => {
    expect(fn(isInfected)).toBe(expected)
  })
}
