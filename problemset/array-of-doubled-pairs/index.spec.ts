import { describe, expect, it } from 'vitest'
import { canReorderDoubled } from '.'

describe('二倍数对数组', () => {
  testCase(canReorderDoubled)
})

function testCase(fn: (arr: number[]) => boolean) {
  it.each([
    [[3, 1, 3, 6], false],
    [[2, 1, 2, 6], false],
    [[4, -2, 2, -4], true],
  ])('示例%#', (arr, expected) => {
    expect(fn(arr)).toBe(expected)
  })
}
