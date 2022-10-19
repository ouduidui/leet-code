import { describe, expect, it } from 'vitest'
import { countStudents } from '.'

describe('无法吃午餐的学生数量', () => {
  testCase(countStudents)
})

function testCase(fn: typeof countStudents) {
  it.each([
    [[1, 1, 0, 0], [0, 1, 0, 1], 0],
    [[1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1], 3],
  ])('示例%#', (students, sandwiches, expected) => {
    expect(fn(students, sandwiches)).toBe(expected)
  })
}
