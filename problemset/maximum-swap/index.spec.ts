import { describe, expect, it } from 'vitest'
import { maximumSwap, maximumSwap2 } from '.'

describe('最大交换', () => {
  describe('直接遍历', () => testCase(maximumSwap))
  describe('贪心', () => testCase(maximumSwap2))
})

function testCase(fn: (num: number) => number) {
  it.each([
    [
      2736,
      7236,
    ],
    [
      9973,
      9973,
    ],
  ])('示例%#', (num, expected) => {
    expect(fn(num)).toBe(expected)
  })
}
