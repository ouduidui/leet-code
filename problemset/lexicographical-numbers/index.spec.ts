import { describe, expect, it } from 'vitest'
import { lexicalOrder } from '.'

describe('字典序排数', () => {
  testCase(lexicalOrder)
})

function testCase(fn: (n: number) => number[]) {
  it.each([
    [13, [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]],
    [2, [1, 2]],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toStrictEqual(expected)
  })
}
