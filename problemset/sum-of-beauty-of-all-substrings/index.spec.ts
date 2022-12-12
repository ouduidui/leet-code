import { describe, expect, it } from 'vitest'
import { beautySum } from '.'

describe('所有子字符串美丽值之和', () => {
  testCase(beautySum)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['aabcb', 5],
    ['aabcbaa', 17],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
