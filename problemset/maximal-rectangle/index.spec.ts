import { describe, expect, it } from 'vitest'
import { maximalRectangle, maximalRectangle2 } from '.'

describe('最大矩形', () => {
  describe('暴力解法', () => {
    testCase(maximalRectangle)
  })

  describe('单调栈', () => {
    testCase(maximalRectangle2)
  })
})

function testCase(fn: (matrix: string[][]) => number) {
  it.each([
    [
      [
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ],
      6,
    ],
    [
      [],
      0,
    ],
    [
      [['0']],
      0,
    ],
    [
      [['1']],
      1,
    ],
    [
      [['0', '0']],
      0,
    ],
  ])('示例%#', (matrix, expected) => {
    expect(fn(matrix)).toBe(expected)
  })
}
