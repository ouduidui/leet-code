import { describe, expect, it } from 'vitest'
import { getLucky } from '.'

describe('字符串转化后的各位数字之和', () => {
  testCase(getLucky)
})

function testCase(fn: (s: string, k: number) => number) {
  it.each([
    ['iiii', 1, 36],
    ['leetcode', 2, 6],
  ])('示例%#', (s, k, expected) => {
    expect(fn(s, k)).toBe(expected)
  })
}
