import { describe, expect, it } from 'vitest'
import { isInterleave, isInterleave2 } from '.'

describe('交错字符串', () => {
  describe('动态规划', () => {
    testCase(isInterleave)
  })

  describe('动态规划 - 滚动数组', () => {
    testCase(isInterleave2)
  })
})

function testCase(fn: (s1: string, s2: string, s3: string) => boolean) {
  it.each([
    ['aabcc', 'dbbca', 'aadbbcbcac', true],
    ['aabcc', 'dbbca', 'aadbbbaccc', false],
    ['', '', '', true],
  ])('示例%#', (s1, s2, s3, expected) => {
    expect(fn(s1, s2, s3)).toBe(expected)
  })
}
