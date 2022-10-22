import { describe, expect, it } from 'vitest'
import { jobScheduling } from '.'

describe('规划兼职工作', () => {
  testCase(jobScheduling)
})

function testCase(fn: typeof jobScheduling) {
  it.each([
    [[1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70], 120],
    [[1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60], 150],
    [[1, 1, 1], [2, 3, 4], [5, 6, 4], 6],
  ])('示例%#', (startTime, endTime, profit, expected) => {
    expect(fn(startTime, endTime, profit)).toBe(expected)
  })
}
