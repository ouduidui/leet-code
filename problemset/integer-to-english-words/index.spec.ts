import { describe, expect, it } from 'vitest'
import { numberToWords, numberToWords2 } from '.'

describe('整数转换英文表示', () => {
  describe('递归', () => {
    testCase(numberToWords)
  })

  describe('迭代', () => {
    testCase(numberToWords2)
  })
})

function testCase(fn: (num: number) => string) {
  it.each([
    [123, 'One Hundred Twenty Three'],
    [12345, 'Twelve Thousand Three Hundred Forty Five'],
    [1234567, 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'],
  ])('示例%#', (num, expected) => {
    expect(fn(num)).toBe(expected)
  })
}
