import { describe, expect, it } from 'vitest'
import { countBits, countBits2, countBits3, countBits4 } from '.'

describe('比特位计数', () => {
  describe('Brian Kernighan算法', () => {
    testCase(countBits)
  })

  describe('动态规划——最高有效位', () => {
    testCase(countBits2)
  })

  describe('动态规划——最低有效位', () => {
    testCase(countBits3)
  })

  describe('动态规划——最低设置位', () => {
    testCase(countBits4)
  })
})

function testCase(fn: (n: number) => number[]) {
  it.each([
    [2, [0, 1, 1]],
    [5, [0, 1, 1, 2, 1, 2]],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toStrictEqual(expected)
  })
}
