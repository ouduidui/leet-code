import { describe, expect, it } from 'vitest'
import { strongPasswordChecker } from '.'

describe('强密码检验器', () => {
  testCase(strongPasswordChecker)
})

function testCase(fn: (password: string) => number) {
  it.each([
    ['a', 5],
    ['aA1', 3],
    ['1337C0d3', 0],
    ['bbaaaaaaaaaaaaaaacccccc', 8],
  ])('示例%#', (password, expected) => {
    expect(fn(password)).toBe(expected)
  })
}
