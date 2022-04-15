import { describe, expect, it } from 'vitest'
import { minDistance } from '.'

describe('编辑距离', () => {
  describe('动态规划', () => {
    testCase(minDistance)
  })
})

function testCase(fn: (word1: string, word2: string) => number) {
  it.each([
    ['horse', 'ros', 3],
    ['intention', 'execution', 5],
  ])('示例%#', (word1, word2, expected) => {
    expect(fn(word1, word2)).toBe(expected)
  })
}
