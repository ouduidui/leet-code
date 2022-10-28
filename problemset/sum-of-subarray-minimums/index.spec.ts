import { describe, expect, it } from 'vitest'
import { sumSubarrayMins, sumSubarrayMins2 } from '.'

describe('子数组的最小值之和', () => {
  describe('单调栈', () => testCase(sumSubarrayMins))
  describe('动态规划', () => testCase(sumSubarrayMins2))
})

function testCase(fn: typeof sumSubarrayMins) {
  it.each([
    [[3, 1, 2, 4], 17],
    [[11, 81, 94, 43, 3], 444],
  ])('示例%#', (arr, expected) => {
    expect(fn(arr)).toBe(expected)
  })
}
