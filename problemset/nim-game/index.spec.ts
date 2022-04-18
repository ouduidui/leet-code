import { describe, expect, it } from 'vitest'
import { canWinNim } from '.'

describe('Nim 游戏', () => {
  testCase(canWinNim)
})

function testCase(fn: (n: number) => boolean) {
  it.each([
    [4, false],
    [1, true],
    [2, true],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
