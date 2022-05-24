import { describe, expect, it } from 'vitest'
import { maximumRequests, maximumRequests2 } from '.'

describe('最多可达成的换楼请求数目', () => {
  describe('回溯 + 枚举', () => {
    testCase(maximumRequests)
  })

  describe('二进制枚举', () => {
    testCase(maximumRequests2)
  })
})

function testCase(fn: (n: number, requests: number[][]) => number) {
  it.each([
    [
      5,
      [
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 2],
        [2, 0],
        [3, 4],
      ],
      5,
    ],
    [
      3,
      [
        [0, 0],
        [1, 2],
        [2, 1],
      ],
      3,
    ],
    [
      4,
      [
        [0, 3],
        [3, 1],
        [1, 2],
        [2, 0],
      ],
      4,
    ],
  ])('示例%#', (n, requests, expected) => {
    expect(fn(n, requests)).toBe(expected)
  })
}
