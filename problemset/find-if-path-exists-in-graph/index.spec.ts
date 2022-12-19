import { describe, expect, it } from 'vitest'
import { validPath } from '.'

describe('寻找图中是否存在路径', () => testCase(validPath))

function testCase(fn: (n: number, edges: number[][], source: number, destination: number) => boolean) {
  it.each([
    [3, [[0, 1], [0, 2]], 0, 2, true],
    [6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5, false],
  ])('示例%#', (n, edges, source, destination, expected) => {
    expect(fn(n, edges, source, destination)).toBe(expected)
  })
}
