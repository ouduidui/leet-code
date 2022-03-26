import { describe, expect, it } from 'vitest'
import { networkBecomesIdle } from '.'

describe('网络空闲的时刻', () => {
  testCase(networkBecomesIdle)
})

function testCase(fn: (edges: number[][], patience: number[]) => number) {
  it.each([
    [
      [
        [0, 1],
        [1, 2],
      ],
      [0, 2, 1],
      8,
    ],
    [
      [
        [0, 1],
        [0, 2],
        [1, 2],
      ],
      [0, 10, 10],
      3,
    ],
  ])('示例%#', (edges, patience, expected) => {
    expect(fn(edges, patience)).toBe(expected)
  })
}
