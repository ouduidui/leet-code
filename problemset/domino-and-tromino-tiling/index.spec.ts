import { describe, expect, it } from 'vitest'
import { numTilings } from '.'

describe('多米诺和托米诺平铺', () => {
  testCase(numTilings)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [3, 5],
    [1, 1],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
