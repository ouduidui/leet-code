import { describe, expect, it } from 'vitest'
import { solution } from '.'

describe('第一个错误的版本', () => {
  testCase(solution)
})

function testCase(
  fn: (isBadVersion: (version: number) => boolean,) => (n: number) => number,
) {
  it.each([
    [5, 4, 4],
    [1, 1, 1],
  ])('示例%#', (n, bad, expected) => {
    const isBadVersion = (version: number): boolean => version === bad
    expect(fn(isBadVersion)(n)).toBe(expected)
  })
}
