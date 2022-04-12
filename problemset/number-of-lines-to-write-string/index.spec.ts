import { describe, expect, it } from 'vitest'
import { numberOfLines } from '.'

describe('写字符串需要的行数', () => {
  testCase(numberOfLines)
})

function testCase(fn: (widths: number[], s: string) => number[]) {
  it.each([
    [
      [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      'abcdefghijklmnopqrstuvwxyz',
      [3, 60],
    ],
    [
      [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      'bbbcccdddaaa',
      [2, 4],
    ],
  ])('示例%#', (widths, s, expected) => {
    expect(fn(widths, s)).toStrictEqual(expected)
  })
}
