import { describe, expect, it } from 'vitest'
import { longestCommonPrefix } from '.'

describe('最长公共前缀', () => {
  describe('暴力解法', () => {
    testCase(longestCommonPrefix)
  })
})

function testCase(fn: (strs: string[]) => string) {
  it.each([
    [['flower', 'flow', 'flight'], 'fl'],
    [['dog', 'racecar', 'car'], ''],
  ])('示例%#', (strs, expected) => {
    expect(fn(strs)).toEqual(expected)
  })
}
