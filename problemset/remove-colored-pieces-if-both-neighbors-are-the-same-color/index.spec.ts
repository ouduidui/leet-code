import { describe, expect, it } from 'vitest'
import { winnerOfGame } from '.'

describe('如果相邻两个颜色均相同则删除当前颜色', () => {
  testCase(winnerOfGame)
})

function testCase(fn: (colors: string) => boolean) {
  it.each([
    ['AAABABB', true],
    ['AA', false],
    ['ABBBBBBBAAA', false],
  ])('示例%#', (colors, expected) => {
    expect(fn(colors)).toBe(expected)
  })
}
