import { describe, expect, it } from 'vitest'
import { squareIsWhite } from '.'

describe('判断国际象棋棋盘中一个格子的颜色', () => {
  testCase(squareIsWhite)
})

function testCase(fn: (coordinates: string) => boolean) {
  it.each([
    ['a1', false],
    ['h3', true],
    ['c7', false],
  ])('示例%#', (corrdinates, expected) => {
    expect(fn(corrdinates)).toBe(expected)
  })
}
