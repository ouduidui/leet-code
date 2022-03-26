import { describe, expect, it } from 'vitest'
import { uncommonFromSentences } from '.'

describe('两句话中的不常见单词', () => {
  testCase(uncommonFromSentences)
})

function testCase(fn: (s1: string, s2: string) => string[]) {
  it.each([
    ['this apple is sweet', 'this apple is sour', ['sweet', 'sour']],
    ['apple apple', 'banana', ['banana']],
  ])('示例%#', (s1, s2, expected) => {
    expect(fn(s1, s2)).toEqual(expected)
  })
}
