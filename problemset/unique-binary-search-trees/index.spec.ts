import { describe, expect, it } from 'vitest'
import { numTrees, numTrees2, numTrees3 } from '.'

describe('不同的二叉搜索树', () => {
  describe('回溯', () => {
    testCase(numTrees)
  })

  describe('动态规划', () => {
    testCase(numTrees2)
  })

  describe('数学', () => {
    testCase(numTrees3)
  })
})

function testCase(fn: (n: number) => number) {
  it.each([
    [3, 5],
    [1, 1],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
