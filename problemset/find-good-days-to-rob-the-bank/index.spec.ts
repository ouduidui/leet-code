import { describe, expect, it } from 'vitest'
import { goodDaysToRobBank, goodDaysToRobBank2 } from '.'

describe('适合打劫银行的日子', () => {
  describe('暴力解法', () => {
    testCase(goodDaysToRobBank)
  })

  describe('动态规划', () => {
    testCase(goodDaysToRobBank2)
  })
})

function testCase(fn: (security: number[], time: number) => number[]) {
  it.each([
    [[5, 3, 3, 3, 5, 6, 2], 2, [2, 3]],
    [[1, 1, 1, 1, 1], 0, [0, 1, 2, 3, 4]],
    [[1, 2, 3, 4, 5, 6], 2, []],
    [[1], 5, []],
    [[1, 2, 5, 4, 1, 0, 2, 4, 5, 3, 1, 2, 4, 3, 2, 4, 8], 2, [5, 10, 14]],
  ])('示例%#', (security, time, expected) => {
    expect(fn(security, time)).toStrictEqual(expected)
  })
}
