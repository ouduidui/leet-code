import { describe, expect, it } from 'vitest'
import { rangeBitwiseAnd, rangeBitwiseAnd2 } from '.'

describe('数字范围按位与', () => {
  describe('位移', () => {
    testCase(rangeBitwiseAnd)
  })

  describe('Brian Kernighan 算法', () => {
    testCase(rangeBitwiseAnd2)
  })
})

function testCase(fn: (left: number, right: number) => number) {
  it.each([
    [5, 7, 4],
    [0, 0, 0],
    [1, 2147483647, 0],
  ])('示例%#', (left, right, expected) => {
    expect(fn(left, right)).toBe(expected)
  })
}
