import { describe, expect, it } from 'vitest'
import { sumSubseqWidths } from '.'

describe('子序列宽度之和', () => {
  testCase(sumSubseqWidths)
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[2, 1, 3], 6],
    [[2], 0],
  ])('示例%#', (nums, epxected) => {
    expect(fn(nums)).toBe(epxected)
  })
}
