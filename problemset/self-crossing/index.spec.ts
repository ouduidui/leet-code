import { describe, expect, it } from 'vitest'
import { isSelfCrossing, isSelfCrossing2 } from '.'

describe('路径交叉', () => {
  describe('归纳法（归纳路径交叉的情况）', () => {
    testCase(isSelfCrossing)
  })

  describe('归纳法（归纳路径不交叉时的状态）', () => {
    testCase(isSelfCrossing2)
  })
})

function testCase(fn: (distance: number[]) => boolean) {
  it.each([
    [
      [2, 1, 1, 2],
      true,
    ],
    [
      [1, 2, 3, 4],
      false,
    ],
    [
      [1, 1, 1, 1],
      true,
    ],
  ])('示例%#', (distance, expected) => {
    expect(fn(distance)).toBe(expected)
  })
}
