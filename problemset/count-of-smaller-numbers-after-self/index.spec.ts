import { describe, expect, it } from 'vitest'
import { countSmaller, countSmaller2 } from '.'

describe('计算右侧小于当前元素的个数', () => {
  describe('离散化树状数组', () => {
    testCase(countSmaller)
  })

  describe('归并排序', () => {
    testCase(countSmaller2)
  })
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    [[5, 2, 6, 1], [2, 1, 1, 0]],
    [[-1], [0]],
    [[-1, -1], [0, 0]],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected)
  })
}
