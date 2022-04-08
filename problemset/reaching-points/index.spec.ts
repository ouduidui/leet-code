import { describe, expect, it } from 'vitest'
import { reachingPoints } from '.'

describe('到达终点', () => {
  testCase(reachingPoints)
})

function testCase(fn: (sx: number, sy: number, tx: number, ty: number) => boolean) {
  it.each([
    [1, 1, 3, 5, true],
    [1, 1, 2, 2, false],
    [1, 1, 1, 1, true],
  ])('示例%#', (sx, sy, tx, ty, expected) => {
    expect(fn(sx, sy, tx, ty)).toBe(expected)
  })
}
