import { canFinish, canFinish2 } from '.';

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
  it('示例一', () => {
    const numCourses = 2;
    const prerequisites = [[1, 0]];
    const expected = true;
    expect(fn(numCourses, prerequisites)).toBe(expected);
  });

  it('示例一', () => {
    const numCourses = 2;
    const prerequisites = [
      [1, 0],
      [0, 1]
    ];
    const expected = false;
    expect(fn(numCourses, prerequisites)).toBe(expected);
  });
}
