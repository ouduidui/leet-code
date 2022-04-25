import { describe, expect, it } from 'vitest'
import { maxProduct } from '.'

describe('最大单词长度乘积', () => {
  testCase(maxProduct)
})

function testCase(fn: (words: string[]) => number) {
  it.each([
    [['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'], 16],
    [['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'], 4],
    [['a', 'aa', 'aaa', 'aaaa'], 0],
  ])('示例%#', (words, expected) => {
    expect(fn(words)).toStrictEqual(expected)
  })
}
