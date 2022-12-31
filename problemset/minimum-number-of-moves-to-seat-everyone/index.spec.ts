import { describe, expect, it } from 'vitest'
import { minMovesToSeat } from '.'

describe('使每位学生都有座位的最少移动次数', () => {
  testCase(minMovesToSeat)
})

function testCase(fn: (seats: number[], students: number[]) => number) {
  it.each([
    [[3, 1, 5], [2, 7, 4], 4],
    [[4, 1, 5, 9], [1, 3, 2, 6], 7],
    [[2, 2, 6, 6], [1, 3, 2, 6], 4],
  ])('示例%#', (seats, students, expected) => {
    expect(fn(seats, students)).toBe(expected)
  })
}
