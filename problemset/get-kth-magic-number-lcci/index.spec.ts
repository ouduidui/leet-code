import { describe, expect, it } from 'vitest'
import { getKthMagicNumber } from '.'

describe('第 k 个数', () => {
  testCase(getKthMagicNumber)
})

function testCase(fn: (k: number) => number) {
  it.each([
    [5, 9],
  ])('示例%#', (k, expected) => {
    expect(fn(k)).toBe(expected)
  })
}
