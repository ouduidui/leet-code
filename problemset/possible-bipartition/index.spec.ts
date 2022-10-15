import { describe, expect, it } from 'vitest'
import { possibleBipartition } from '.'

describe('可能的二分法', () => {
  testCase(possibleBipartition)
})

function testCase(fn: typeof possibleBipartition) {
  it.each([
    [4, [[1, 2], [1, 3], [2, 4]], true],
    [3, [[1, 2], [1, 3], [2, 3]], false],
    [5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], false],
  ])('示例%#', (n, dislikes, expected) => {
    expect(fn(n, dislikes)).toBe(expected)
  })
}
