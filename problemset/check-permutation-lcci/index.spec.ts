import { describe, expect, it } from 'vitest'
import { CheckPermutation } from '.'

describe('判定是否互为字符重排', () => {
  testCase(CheckPermutation)
})

function testCase(fn: (s1: string, s2: string) => boolean) {
  it.each([
    [
      'abc', 'bca', true,
    ],
    [
      'abc', 'bad', false,
    ],
  ])('示例%#', (s1, s2, expected) => {
    expect(fn(s1, s2)).toBe(expected)
  })
}
