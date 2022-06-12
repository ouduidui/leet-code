import { describe, expect, it } from 'vitest'
import { reverseString } from '.'

describe('反转字符串', () => {
  testCase(reverseString)
})

function testCase(fn: (s: string[]) => void) {
  it.each([
    [
      ['h', 'e', 'l', 'l', 'o'],
      ['o', 'l', 'l', 'e', 'h'],
    ],
    [
      ['H', 'a', 'n', 'n', 'a', 'h'],
      ['h', 'a', 'n', 'n', 'a', 'H'],
    ],
  ])('示例%#', (s, expected) => {
    fn(s)
    expect(s).toStrictEqual(expected)
  })
}
