import { describe, expect, it } from 'vitest'
import { busyStudent, busyStudent2, busyStudent3 } from '.'

describe('在既定时间做作业的学生人数', () => {
  describe('枚举', () => testCase(busyStudent))
  describe('差分数组', () => testCase(busyStudent2))
  describe('二分查找', () => testCase(busyStudent3))
})

function testCase(fn: (startTime: number[], endTime: number[], queryTime: number) => number) {
  it.each([
    [
      [1, 2, 3],
      [3, 2, 7],
      4,
      1,
    ],
    [
      [4],
      [4],
      4,
      1,
    ],
    [
      [4],
      [4],
      5,
      0,
    ],
    [
      [1, 1, 1, 1],
      [1, 3, 2, 4],
      7,
      0,
    ],
    [
      [9, 8, 7, 6, 5, 4, 3, 2, 1],
      [10, 10, 10, 10, 10, 10, 10, 10, 10],
      5,
      5,
    ],
  ])('示例%#', (startTime, endTime, queryTime, expected) => {
    expect(fn(startTime, endTime, queryTime)).toBe(expected)
  })
}
