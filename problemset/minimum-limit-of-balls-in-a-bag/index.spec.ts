import { describe, expect, it } from 'vitest'
import { minimumSize } from '.'

describe('袋子里最少数目的球', () => {
  testCase(minimumSize)
})

function testCase(fn: (nums: number[], maxOperations: number) => number) {
  it.each([
    [[9], 2, 3],
    [[2, 4, 8, 2], 4, 2],
    [[7, 17], 2, 7],
  ])('示例%#', (nums, maxOperations, expected) => {
    expect(fn(nums, maxOperations)).toBe(expected)
  })
}
