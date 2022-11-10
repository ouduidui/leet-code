import { describe, expect, it } from 'vitest'
import { shortestPathAllKeys } from '.'

describe('获取所有钥匙的最短路径', () => {
  testCase(shortestPathAllKeys)
})

function testCase(fn: (grid: string[]) => number) {
  it.each([
    [['@.a.#', '###.#', 'b.A.B'], 8],
    [['@..aA', '..B#.', '....b'], 6],
    [['@Aa'], -1],
  ])('示例%#', (grid, expected) => {
    expect(fn(grid)).toBe(expected)
  })
}
