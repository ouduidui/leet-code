import { describe, expect, it } from 'vitest'
import { sequenceReconstruction } from '.'

describe('重建序列', () => {
  testCase(sequenceReconstruction)
})

function testCase(fn: (nums: number[], sequences: number[][]) => boolean) {
  it.each([
    [
      [1, 2, 3],
      [[1, 2], [1, 3]],
      false,
    ],
    [
      [1, 2, 3],
      [[1, 2]],
      false,
    ],
    [
      [1, 2, 3],
      [[1, 2], [1, 3], [2, 3]],
      true,
    ],
  ])('示例%#', (nums, suquences, expected) => {
    expect(fn(nums, suquences)).toBe(expected)
  })
}
