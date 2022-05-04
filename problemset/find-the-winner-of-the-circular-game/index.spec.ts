import { describe, expect, it } from 'vitest'
import { findTheWinner, findTheWinner2, findTheWinner3 } from '.'

describe('找出游戏的获胜者', () => {
  describe('模拟 + 队列', () => {
    testCase(findTheWinner)
  })

  describe('数学 + 递归', () => {
    testCase(findTheWinner2)
  })

  describe('数学 + 迭代', () => {
    testCase(findTheWinner3)
  })
})

function testCase(fn: (n: number, k: number) => number) {
  it.each([
    [5, 2, 3],
    [6, 5, 1],
  ])('示例%#', (n, k, expected) => {
    expect(fn(n, k)).toBe(expected)
  })
}
