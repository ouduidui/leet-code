import { describe, expect, it } from 'vitest'
import { arrayNesting, arrayNesting2 } from '.'

describe('数组嵌套', () => {
  describe('图', () => testCase(arrayNesting))
  describe('原地标记', () => testCase(arrayNesting2))
})

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [
      [5, 4, 0, 3, 1, 6, 2], 4,
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
