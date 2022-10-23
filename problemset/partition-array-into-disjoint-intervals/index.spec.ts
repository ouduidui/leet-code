import { describe, expect, it } from 'vitest'
import { partitionDisjoint } from '.'

describe('分割数组', () => {
  testCase(partitionDisjoint)
})

function testCase(fn: typeof partitionDisjoint) {
  it.each([
    [
      [5, 0, 3, 8, 6], 3,
    ],
    [
      [1, 1, 1, 0, 6, 12], 4,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
