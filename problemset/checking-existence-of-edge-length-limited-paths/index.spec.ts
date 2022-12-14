import { describe, expect, it } from 'vitest'
import { distanceLimitedPathsExist } from '.'

describe('检查边长度限制的路径是否存在', () => {
  testCase(distanceLimitedPathsExist)
})

function testCase(fn: (n: number, edgeList: number[][], queries: number[][]) => boolean[]) {
  it.each([
    [3, [[0, 1, 2], [1, 2, 4], [2, 0, 8], [1, 0, 16]], [[0, 1, 2], [0, 2, 5]], [false, true]],
    [5, [[0, 1, 10], [1, 2, 5], [2, 3, 9], [3, 4, 13]], [[0, 4, 14], [1, 4, 13]], [true, false]],
  ])('示例%#', (n, edgeList, queries, expected) => {
    expect(fn(n, edgeList, queries)).toStrictEqual(expected)
  })
}
