import { describe, expect, it } from 'vitest'
import { numDistinct, numDistinct2 } from '.'

describe('不同的子序列', () => {
  describe('回溯', () => {
    testCase(numDistinct)
  })

  describe('动态规划', () => {
    testCase(numDistinct2)
  })
})

function testCase(fn: (s: string, t: string) => number) {
  it.each([
    ['rabbbit', 'rabbit', 3],
    ['babgbag', 'bag', 5],
    ['adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc', 'bcddceeeebecbc', 700531452],
  ])('示例%#', (s, t, expected) => {
    expect(fn(s, t)).toBe(expected)
  })
}
