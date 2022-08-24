import { describe, expect, it } from 'vitest'
import { canBeEqual, canBeEqual2 } from '.'

describe('通过翻转子数组使两个数组相等', () => {
  describe('哈希表', () => testCase(canBeEqual))
  describe('排序', () => testCase(canBeEqual2))
})

function testCase(fn: (target: number[], arr: number[]) => boolean) {
  it.each([
    [
      [1, 2, 3, 4],
      [2, 4, 1, 3],
      true,
    ],
    [
      [7],
      [7],
      true,
    ],
    [
      [3, 7, 9],
      [3, 7, 11],
      false,
    ],
  ])('示例%#', (target, arr, expected) => {
    expect(fn(target, arr)).toBe(expected)
  })
}
