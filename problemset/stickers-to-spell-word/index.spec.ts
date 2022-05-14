import { describe, expect, it } from 'vitest'
import { minStickers } from '.'

describe('贴纸拼词', () => {
  testCase(minStickers)
})

function testCase(fn: (stickers: string[], target: string) => number) {
  it.each([
    [
      ['with', 'example', 'science'],
      'thehat',
      3,
    ],
    [
      ['notice', 'possible'],
      'basicbasic',
      -1,
    ],
  ])('示例%#', (stickers, target, expected) => {
    expect(fn(stickers, target)).toBe(expected)
  })
}
