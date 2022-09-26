import { describe, expect, it } from 'vitest'
import { missingTwo } from '.'

describe('消失的两个数字', () => {
  testCase(missingTwo)
})

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    [
      [1], [2, 3],
    ],
    [
      [2, 3], [1, 4],
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums).sort()).toStrictEqual(expected.sort())
  })
}
