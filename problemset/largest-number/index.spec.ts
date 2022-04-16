import { describe, expect, it } from 'vitest'
import { largestNumber } from '.'

describe('最大数', () => {
  testCase(largestNumber)
})

function testCase(fn: (nums: number[]) => string) {
  it.each([
    [[10, 2], '210'],
    [[3, 30, 34, 5, 9], '9534330'],
    [[111311, 1113], '1113111311'],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
