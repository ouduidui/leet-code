import { describe, expect, it } from 'vitest'
import { convertToTitle, convertToTitle2 } from '.'

describe('Excel表列名称', () => {
  describe('数学', () => {
    testCase(convertToTitle)
  })

  describe('数学 - 优化', () => {
    testCase(convertToTitle2)
  })
})

function testCase(fn: (columnNumber: number) => string) {
  it.each([
    [1, 'A'],
    [28, 'AB'],
    [701, 'ZY'],
    [2147483647, 'FXSHRXW'],
  ])('示例%#', (columnNumber, expected) => {
    expect(fn(columnNumber)).toBe(expected)
  })
}
