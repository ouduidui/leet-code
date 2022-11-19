import { describe, expect, it } from 'vitest'
import { largestAltitude } from '.'

describe('找到最高海拔', () => {
  testCase(largestAltitude)
})

function testCase(fn: (gain: number[]) => number) {
  it.each([
    [[-5, 1, 5, 0, -7], 1],
    [[-4, -3, -2, -1, 4, 3, 2], 0],
  ])('示例%#', (gain, expected) => {
    expect(fn(gain)).toBe(expected)
  })
}
