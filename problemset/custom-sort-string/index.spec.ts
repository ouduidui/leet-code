import { describe, expect, it } from 'vitest'
import { customSortString, customSortString2 } from '.'

describe('自定义字符串排序', () => {
  describe('自定义排序', () => testCase(customSortString))
  describe('计数排序', () => testCase(customSortString2))
})

function testCase(fn: (order: string, s: string) => string) {
  it.each([
    ['cba', 'abcd', ['cbad', 'dcba', 'cdba', 'cbda']],
    ['cbafg', 'abcd', ['cbad', 'cbad', 'dcba']],
  ])('示例%#', (order, s, expected) => {
    expect(expected).toContain(fn(order, s))
  })
}
