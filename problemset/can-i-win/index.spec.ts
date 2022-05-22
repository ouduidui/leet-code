import { describe, expect, it } from 'vitest'
import { canIWin } from '.'

describe('我能赢吗', () => {
  testCase(canIWin)
})

function testCase(fn: (maxChoosableInteger: number, desiredTotal: number) => boolean) {
  it.each([
    [10, 11, false],
    [10, 0, true],
    [10, 1, true],
  ])('示例%#', (maxChoosableInteger, desiredTotal, expected) => {
    expect(fn(maxChoosableInteger, desiredTotal)).toBe(expected)
  })
}
