import { describe, expect, it } from 'vitest'
import { findLUSlength } from '.'

describe('最长特殊序列 II', () => {
  testCase(findLUSlength)
})

function testCase(fn: (strs: string[]) => number) {
  it.each([
    [
      ['aba', 'cdc', 'eae'],
      3,
    ],
    [
      ['aaa', 'aaa', 'aa'],
      -1,
    ],
  ])('示例%#', (strs, expected) => {
    expect(fn(strs)).toBe(expected)
  })
}
