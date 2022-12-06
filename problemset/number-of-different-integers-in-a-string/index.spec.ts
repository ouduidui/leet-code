import { describe, expect, it } from 'vitest'
import { numDifferentIntegers } from '.'

describe('字符串中不同整数的数目', () => {
  testCase(numDifferentIntegers)
})

function testCase(fn: (word: string) => number) {
  it.each([
    ['a123bc34d8ef34', 3],
    ['leet1234code234', 2],
    ['a1b01c001', 1],
  ])('示例%#', (word, expected) => {
    expect(fn(word)).toBe(expected)
  })
}
