import { describe, it } from 'vitest'
import { subsetsWithDup } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'
// need refactor

describe('子集 II', () => {
  testCase(subsetsWithDup)
})

function testCase(fn: (nums: number[]) => number[][]) {
  it('示例一', () => {
    const nums = [1, 2, 2]
    const expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
    twoDimensionalArrayEqual(fn(nums), expected)
  })

  it('示例二', () => {
    const nums = [0]
    const expected = [[], [0]]
    twoDimensionalArrayEqual(fn(nums), expected)
  })

  it('示例三', () => {
    const nums = [4, 4, 4, 1, 4]
    const expected = [
      [],
      [1],
      [1, 4],
      [1, 4, 4],
      [1, 4, 4, 4],
      [1, 4, 4, 4, 4],
      [4],
      [4, 4],
      [4, 4, 4],
      [4, 4, 4, 4],
    ]
    twoDimensionalArrayEqual(fn(nums), expected)
  })
}
