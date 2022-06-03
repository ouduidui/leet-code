import { describe, expect, it } from 'vitest'
import { consecutiveNumbersSum } from '.'

describe('连续整数求和', () => {
  testCase(consecutiveNumbersSum)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [5, 2],
    [9, 3],
    [15, 4],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
