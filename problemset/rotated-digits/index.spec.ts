import { describe, expect, it } from 'vitest'
import { rotatedDigits, rotatedDigits2 } from '.'

describe('旋转数字', () => {
  describe('枚举每一个数', () => testCase(rotatedDigits))
  describe('数位动态规划', () => testCase(rotatedDigits2))
})

function testCase(fn: (n: number) => number) {
  it.each([
    [10, 4],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
