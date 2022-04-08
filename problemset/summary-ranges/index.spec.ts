
import { describe, expect, it } from 'vitest'
import { summaryRanges } from '.'

describe('汇总区间', () => {
  testCase(summaryRanges)
})

function testCase(fn: (nums: number[]) => string[]) {
  it.each([
    [[0, 1, 2, 4, 5, 7], ['0->2', '4->5', '7']],
    [[0, 2, 3, 4, 6, 8, 9], ['0', '2->4', '6', '8->9']],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected)
  })
}
