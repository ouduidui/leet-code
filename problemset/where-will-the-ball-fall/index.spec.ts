import { findBall } from './index';

describe('球会落何处', () => {
  testCase(findBall);
});

function testCase(fn: (grid: number[][]) => number[]) {
  it('示例一', () => {
    const grid = [
      [1, 1, 1, -1, -1],
      [1, 1, 1, -1, -1],
      [-1, -1, -1, 1, 1],
      [1, 1, 1, 1, -1],
      [-1, -1, -1, -1, -1]
    ];
    const expected = [1, -1, -1, -1, -1];
    expect(fn(grid)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const grid = [[-1]];
    const expected = [-1];
    expect(fn(grid)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const grid = [
      [1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1]
    ];
    const expected = [0, 1, 2, 3, 4, -1];
    expect(fn(grid)).toStrictEqual(expected);
  });
}
