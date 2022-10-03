import { describe, expect, it } from 'vitest'
import { checkOnesSegment } from '.'

describe('检查二进制字符串字段', () => {
  testCase(checkOnesSegment)
})

function testCase(fn: (s: string) => boolean) {
  it.each([
    [
      '1001', false,
    ],
    [
      '110', true,
    ],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
