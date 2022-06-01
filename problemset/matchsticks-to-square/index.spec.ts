import { describe, expect, it } from 'vitest'
import { makesquare, makesquare2 } from '.'

describe('火柴拼正方形', () => {
  describe('回溯', () => {
    testCase(makesquare)
  })

  describe('状态压缩 + 动态规划', () => {
    testCase(makesquare2)
  })
})

function testCase(fn: (matchsticks: number[]) => boolean) {
  it.each([
    [
      [1, 1, 2, 2, 2],
      true,
    ],
    [
      [3, 3, 3, 3, 4],
      false,
    ],
  ])('示例%#', (matchsticks, expected) => {
    expect(fn(matchsticks)).toBe(expected)
  })
}
