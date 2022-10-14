import { describe, expect, it } from 'vitest'
import { distinctSubseqII } from '.'

describe('不同的子序列 II', () => {
  testCase(distinctSubseqII)
})

function testCase(fn: typeof distinctSubseqII) {
  it.each([
    ['abc', 7],
    ['aba', 6],
    ['aaa', 3],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
