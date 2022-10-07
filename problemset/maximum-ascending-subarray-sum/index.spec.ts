import { describe, expect, it } from 'vitest'
import { maxAscendingSum } from '.'

describe('最大升序子数组和', () => {
  testCase(maxAscendingSum)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [
      [10, 20, 30, 5, 10, 50],
      65,
    ],
    [
      [10, 20, 30, 40, 50],
      150,
    ],
    [
      [12, 17, 15, 13, 10, 11, 12],
      33,
    ],
    [
      [100, 10, 1],
      100,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
