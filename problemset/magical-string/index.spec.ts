import { describe, expect, it } from 'vitest'
import { magicalString } from '.'

describe('神奇字符串', () => {
  testCase(magicalString)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [6, 3],
    [1, 1],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
