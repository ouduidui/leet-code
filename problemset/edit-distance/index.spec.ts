import { describe, expect, it } from 'vitest'
import { minDistance } from '.'
// need refactor
describe('编辑距离', () => {
  describe('动态规划', () => {
    testCase(minDistance)
  })
})

function testCase(fn: (word1: string, word2: string) => number) {
  it('示例一', () => {
    const word1 = 'horse'
    const word2 = 'ros'
    const expected = 3

    expect(fn(word1, word2)).toBe(expected)
  })

  it('示例二', () => {
    const word1 = 'intention'
    const word2 = 'execution'
    const expected = 5

    expect(fn(word1, word2)).toBe(expected)
  })
}
