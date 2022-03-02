import { maxPoints } from './index';

describe('直线上最多的点数', () => {
  testCase(maxPoints);
});

function testCase(fn: (points: number[][]) => number) {
  it('示例一', () => {
    const points = [
      [1, 1],
      [2, 2],
      [3, 3]
    ];
    const expected = 3;
    expect(fn(points)).toBe(expected);
  });

  it('示例二', () => {
    const points = [
      [1, 1],
      [3, 2],
      [5, 3],
      [4, 1],
      [2, 3],
      [1, 4]
    ];
    const expected = 4;
    expect(fn(points)).toBe(expected);
  });
}
