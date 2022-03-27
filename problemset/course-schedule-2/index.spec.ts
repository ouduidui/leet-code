import { describe, expect, it } from 'vitest'
import { findOrder, findOrder2 } from '.'

describe('课程表 II', () => {
  describe('广度优先搜索', () => {
    testCase(findOrder)
  })

  describe('深度度优先搜索', () => {
    testCase(findOrder2)
  })
})

function testCase(fn: (numCourses: number, prerequisites: number[][]) => number[]) {
  it.each([
    [2, [[1, 0]], [[0, 1]]],
    [4, [[1, 0], [2, 0], [3, 1], [3, 2]], [[0, 1, 2, 3], [0, 2, 1, 3]]],
    [1, [], [[0]]],
    [2, [[0, 1], [1, 0]], [[]]],
  ])('示例%#', (numCourses, prerequisites, expected) => {
    expect(expected).toContainEqual(fn(numCourses, prerequisites))
  })
}
