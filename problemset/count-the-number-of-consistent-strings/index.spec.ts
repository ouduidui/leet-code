import { describe, expect, it } from 'vitest'
import { countConsistentStrings } from '.'

describe('统计一致字符串的数目', () => {
  testCase(countConsistentStrings)
})

function testCase(fn: typeof countConsistentStrings) {
  it.each([
    ['ab', ['ad', 'bd', 'aaab', 'baa', 'badab'], 2],
    ['abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'], 7],
    ['cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'], 4],
  ])('示例%#', (allowed, words, expected) => {
    expect(fn(allowed, words)).toBe(expected)
  })
}
