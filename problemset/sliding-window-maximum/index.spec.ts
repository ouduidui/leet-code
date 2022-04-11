import { describe, expect, it } from 'vitest'
import { maxSlidingWindow, maxSlidingWindow2, maxSlidingWindow3 } from '.'

describe('滑动窗口最大值', () => {
  describe('优先队列', () => {
    testCase(maxSlidingWindow)
  })

  describe('单调队列', () => {
    testCase(maxSlidingWindow2)
  })

  describe('分块 + 预处理', () => {
    testCase(maxSlidingWindow3)
  })
})

function testCase(fn: (nums: number[], k: number) => number[]) {
  it.each([
    [[1, 3, -1, -3, 5, 3, 6, 7], 3, [3, 3, 5, 5, 6, 7]],
    [[1], 1, [1]],
  ])('示例%#', (nums, k, expected) => {
    expect(fn(nums, k)).toStrictEqual(expected)
  })
}
