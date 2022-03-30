import { describe, expect, it } from 'vitest'
import { busiestServers } from '.'

describe('找到处理最多请求的服务器', () => {
  testCase(busiestServers)
})

function testCase(fn: (k: number, arrival: number[], load: number[]) => number[]) {
  it.each([
    [3, [1, 2, 3, 4, 5], [5, 2, 3, 3, 3], [1]],
    [3, [1, 2, 3, 4], [1, 2, 1, 2], [0]],
    [3, [1, 2, 3], [10, 12, 11], [0, 1, 2]],
    [3, [1, 2, 3, 4, 8, 9, 10], [5, 2, 10, 3, 1, 2, 2], [1]],
    [1, [1], [1], [0]],
  ])('示例%#', (k, arrival, load, expected) => {
    expect(fn(k, arrival, load)).toStrictEqual(expected)
  })
}
