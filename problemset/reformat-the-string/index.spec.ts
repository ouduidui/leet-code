import { describe, expect, it } from 'vitest'
import { reformat } from '.'

describe('重新格式化字符串', () => {
  testCase(reformat)
})

function testCase(fn: (s: string) => string) {
  it.each([
    [
      'a0b1c2',
      'a0b1c2',
    ],
    [
      'leetcode',
      '',
    ],
    [
      '1229857369',
      '',
    ],
    [
      'covid2019',
      'c0v9d2o1i',
    ],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
