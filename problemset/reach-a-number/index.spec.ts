import { describe, expect, it } from 'vitest'
import { reachNumber } from '.'

describe('到达终点数字', () => {
  testCase(reachNumber)
})

function testCase(fn: (target: number) => number) {
  it.each([
    [3, 2],
    [2, 3],
  ])('示例%#', (target, expected) => {
    expect(fn(target)).toBe(expected)
  })
}
