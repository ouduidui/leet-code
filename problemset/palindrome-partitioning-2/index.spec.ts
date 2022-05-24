import { describe, expect, it } from 'vitest'
import { minCut } from '.'

describe('分割回文串 II', () => {
  testCase(minCut)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['aab', 1],
    ['a', 0],
    ['ab', 1],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
