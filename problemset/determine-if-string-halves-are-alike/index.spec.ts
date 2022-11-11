import { describe, expect, it } from 'vitest'
import { halvesAreAlike } from '.'

describe('判断字符串的两半是否相似', () => {
  testCase(halvesAreAlike)
})

function testCase(fn: (s: string) => boolean) {
  it.each([
    ['book', true],
    ['textbook', false],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
