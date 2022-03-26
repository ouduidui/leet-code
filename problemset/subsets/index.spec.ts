import { describe, it } from 'vitest'
import { subsets } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'
// need refactor

describe('子集', () => {
  describe('回溯', () => {
    testCase(subsets)
  })
})

function testCase(fn: (nums: number[]) => number[][]) {
  it('示例一', () => {
    const nums = [1, 2, 3]
    const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
    twoDimensionalArrayEqual(fn(nums), expected)
  })

  it('示例一', () => {
    const nums = [0]
    const expected = [[], [0]]
    twoDimensionalArrayEqual(fn(nums), expected)
  })
}
