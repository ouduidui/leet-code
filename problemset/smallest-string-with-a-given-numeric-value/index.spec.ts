import { describe, expect, it } from 'vitest'
import { getSmallestString } from '.'

describe('具有给定数值的最小字符串', () => {
  testCase(getSmallestString)
})

function testCase(fn: (n: number, k: number) => string) {
  it.each([
    [3, 27, 'aay'],
    [5, 73, 'aaszz'],
  ])('示例%#', (n, k, expected) => {
    expect(fn(n, k)).toBe(expected)
  })
}
