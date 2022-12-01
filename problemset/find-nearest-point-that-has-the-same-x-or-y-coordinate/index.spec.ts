import { describe, expect, it } from 'vitest'
import { nearestValidPoint } from '.'

describe('找到最近的有相同 X 或 Y 坐标的点', () => {
  testCase(nearestValidPoint)
})

function testCase(fn: (x: number, y: number, points: number[][]) => number) {
  it.each([
    [3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]], 2],
    [3, 4, [[3, 4]], 0],
    [3, 4, [[2, 3]], -1],
  ])('示例%#', (x, y, points, expected) => {
    expect(fn(x, y, points)).toBe(expected)
  })
}
