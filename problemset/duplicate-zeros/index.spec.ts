import { describe, expect, it } from 'vitest'
import { duplicateZeros } from '.'

describe('复写零', () => {
  testCase(duplicateZeros)
})

function testCase(fn: (arr: number[]) => void) {
  it.each([
    [
      [1, 0, 2, 3, 0, 4, 5, 0],
      [1, 0, 0, 2, 3, 0, 0, 4],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  ])('示例%#', (arr, expected) => {
    fn(arr)
    expect(arr).toStrictEqual(expected)
  })
}
