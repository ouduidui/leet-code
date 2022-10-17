import { describe, expect, it } from 'vitest'
import { totalFruit } from '.'

describe('水果成篮', () => {
  testCase(totalFruit)
})

function testCase(fn: typeof totalFruit) {
  it.each([
    [[1, 2, 1], 3],
    [[0, 1, 2, 2], 3],
    [[1, 2, 3, 2, 2], 4],
    [[3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4], 5],
  ])('示例%#', (fruits, expected) => {
    expect(fn(fruits)).toBe(expected)
  })
}
