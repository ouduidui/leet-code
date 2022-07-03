import { describe, expect, it } from 'vitest'
import { nextGreaterElement } from '.'

describe('下一个更大元素 III', () => {
  testCase(nextGreaterElement)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [12, 21],
    [21, -1],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
