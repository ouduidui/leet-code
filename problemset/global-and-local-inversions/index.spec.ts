import { describe, expect, it } from 'vitest'
import { isIdealPermutation, isIdealPermutation2 } from '.'

describe('全局倒置与局部倒置', () => {
  describe('维护后缀最小值', () => testCase(isIdealPermutation))
  describe('归纳证明', () => testCase(isIdealPermutation2))
})

function testCase(fn: (nums: number[]) => boolean) {
  it.each([
    [[1, 0, 2], true],
    [[1, 2, 0], false],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
