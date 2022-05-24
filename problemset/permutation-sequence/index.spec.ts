import { describe, expect, it } from 'vitest'
import { getPermutation, getPermutation2 } from '.'

describe('排列序列', () => {
  describe('回溯', () => {
    testCase(getPermutation)
  })

  describe('数学 + 缩小问题规模', () => {
    testCase(getPermutation2)
  })
})

function testCase(fn: (n: number, k: number) => string) {
  it.each([
    [3, 3, '213'],
    [4, 9, '2314'],
    [3, 1, '123'],
  ])('示例%#', (n, k, expected) => {
    expect(fn(n, k)).toBe(expected)
  })
}
