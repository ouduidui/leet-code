import { describe, expect, it } from 'vitest'
import { shortestToChar } from '.'

describe('字符的最短距离', () => {
  testCase(shortestToChar)
})

function testCase(fn: (s: string, c: string) => number[]) {
  it.each([
    ['loveleetcode', 'e', [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]],
    ['aaab', 'b', [3, 2, 1, 0]],
  ])('示例%#', (s, c, expected) => {
    expect(fn(s, c)).toStrictEqual(expected)
  })
}
