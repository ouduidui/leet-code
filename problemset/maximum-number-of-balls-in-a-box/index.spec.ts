import { describe, expect, it } from 'vitest'
import { countBalls } from '.'

describe('盒子中小球的最大数量', () => {
  testCase(countBalls)
})

function testCase(fn: (lowLimit: number, highLimit: number) => number) {
  it.each([
    [1, 10, 2],
    [5, 15, 2],
    [19, 28, 2],
  ])('示例%#', (lowLimit, highLimit, expected) => {
    expect(fn(lowLimit, highLimit)).toBe(expected)
  })
}
