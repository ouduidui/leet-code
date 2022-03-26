import { describe, expect, it } from 'vitest'
import { goodDaysToRobBank, goodDaysToRobBank2 } from '.'
// need refactor
describe('适合打劫银行的日子', () => {
  describe('暴力解法', () => {
    testCase(goodDaysToRobBank)
  })

  describe('动态规划', () => {
    testCase(goodDaysToRobBank2)
  })
})

function testCase(fn: (security: number[], time: number) => number[]) {
  it('示例一', () => {
    const security = [5, 3, 3, 3, 5, 6, 2]
    const time = 2
    const expected = [2, 3]
    expect(fn(security, time)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const security = [1, 1, 1, 1, 1]
    const time = 0
    const expected = [0, 1, 2, 3, 4]
    expect(fn(security, time)).toStrictEqual(expected)
  })

  it('示例三', () => {
    const security = [1, 2, 3, 4, 5, 6]
    const time = 2
    const expected: number[] = []
    expect(fn(security, time)).toStrictEqual(expected)
  })

  it('示例四', () => {
    const security = [1]
    const time = 5
    const expected: number[] = []
    expect(fn(security, time)).toStrictEqual(expected)
  })

  it('示例五', () => {
    const security = [1, 2, 5, 4, 1, 0, 2, 4, 5, 3, 1, 2, 4, 3, 2, 4, 8]
    const time = 2
    const expected = [5, 10, 14]
    expect(fn(security, time)).toStrictEqual(expected)
  })
}
