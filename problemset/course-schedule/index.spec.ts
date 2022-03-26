import { canFinish, canFinish2 } from '.';
import { describe, it, expect } from 'vitest';

describe('课程表', () => {
  describe('深度优先搜索', () => {
    testCase(canFinish);
  });

  describe('广度优先搜索', () => {
    testCase(canFinish2);
  });
});

function testCase(
  fn: (numCourses: number, prerequisites: number[][]) => boolean
) {
  it.each([
    [2, [[1, 0]], true],
    [
      2,
      [
        [1, 0],
        [0, 1]
      ],
      false
    ]
  ])('示例%#', (numCourses, prerequisites, expected) => {
    expect(fn(numCourses, prerequisites)).toBe(expected);
  });
}
