import { describe, expect, it } from 'vitest'
import { canFormArray } from '.'

describe('能否连接形成数组', () => {
  testCase(canFormArray)
})

function testCase(fn: (arr: number[], pieces: number[][]) => boolean) {
  it.each([
    [[15, 88], [[88], [15]], true],
    [[49, 18, 16], [[16, 18, 49]], false],
    [[91, 4, 64, 78], [[78], [4, 64], [91]], true],
  ])('示例%#', (arr, pieces, expected) => {
    expect(fn(arr, pieces)).toBe(expected)
  })
}
