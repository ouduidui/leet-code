import { describe, expect, it } from 'vitest'
import { addDigits, addDigits2 } from '.'

describe('各位相加', () => {
  describe('模拟', () => {
    testCase(addDigits)
  })

  describe('数学', () => {
    testCase(addDigits2)
  })
})

function testCase(fn: (num: number) => number) {
  it.each([
    [38, 2],
    [0, 0],
  ])('示例%#', (num, expected) => {
    expect(fn(num)).toBe(expected)
  })
}
