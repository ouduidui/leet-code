import { describe, expect, it } from 'vitest'
import { binaryGap, binaryGap2 } from '.'

describe('二进制间距', () => {
  describe('暴力解法', () => {
    testCase(binaryGap)
  })

  describe('位运算', () => {
    testCase(binaryGap2)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    [22, 2],
    [8, 0],
    [5, 2],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
