import { describe, expect, it } from 'vitest'
import { selfDividingNumbers } from '.'

describe('自除数', () => {
  testCase(selfDividingNumbers)
})

function testCase(fn: (left: number, right: number) => number[]) {
  it.each([
    [1, 22, [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]],
    [47, 85, [48, 55, 66, 77]],
  ])('示例%#', (left, right, expected) => {
    expect(fn(left, right)).toStrictEqual(expected)
  })
}
