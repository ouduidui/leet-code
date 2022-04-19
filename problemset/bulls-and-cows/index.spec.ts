import { describe, expect, it } from 'vitest'
import { getHint } from '.'

describe('猜数字游戏', () => {
  testCase(getHint)
})

function testCase(fn: (secret: string, guess: string) => string) {
  it.each([
    ['1807', '7810', '1A3B'],
    ['1123', '0111', '1A1B'],
  ])('示例%#', (secret, guess, expected) => {
    expect(fn(secret, guess)).toBe(expected)
  })
}
