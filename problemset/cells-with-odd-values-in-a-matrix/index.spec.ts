import { describe, expect, it } from 'vitest'
import { oddCells } from '.'

describe('奇数值单元格的数目', () => {
  testCase(oddCells)
})

function testCase(fn: (m: number, n: number, indices: number[][]) => number) {
  it.each([
    [2, 3, [[0, 1], [1, 1]], 6],
    [2, 2, [[1, 1], [0, 0]], 0],
  ])('示例%#', (m, n, indices, expected) => {
    expect(fn(m, n, indices)).toBe(expected)
  })
}
