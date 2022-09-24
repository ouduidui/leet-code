import { describe, expect, it } from 'vitest'
import { decrypt } from '.'

describe('拆炸弹', () => {
  testCase(decrypt)
})

function testCase(fn: (code: number[], k: number) => number[]) {
  it.each([
    [
      [5, 7, 1, 4], 3, [12, 10, 16, 13],
    ],
    [
      [1, 2, 3, 4], 0, [0, 0, 0, 0],
    ],
    [
      [2, 4, 9, 3], -2, [12, 5, 6, 13],
    ],
  ])('示例%#', (code, k, expected) => {
    expect(fn(code, k)).toStrictEqual(expected)
  })
}
