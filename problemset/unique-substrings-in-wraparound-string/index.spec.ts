import { describe, expect, it } from 'vitest'
import { findSubstringInWraproundString } from '.'

describe('环绕字符串中唯一的子字符串', () => {
  testCase(findSubstringInWraproundString)
})

function testCase(fn: (p: string) => number) {
  it.each([
    ['a', 1],
    ['cac', 2],
    ['zab', 6],
  ])('示例%#', (p, expected) => {
    expect(fn(p)).toBe(expected)
  })
}
