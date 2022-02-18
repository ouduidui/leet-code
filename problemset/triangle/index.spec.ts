import { minimumTotal, minimumTotal2 } from './index';

describe('三角形最小路径和', () => {
  describe('动态规划', () => {
    testCase(minimumTotal);
  });

  describe('动态规划 + 空间优化', () => {
    testCase(minimumTotal2);
  });
});

function testCase(fn: (triangle: number[][]) => number) {
  it('示例一', () => {
    const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
    const expected = 11;
    expect(fn(triangle)).toBe(expected);
  });

  it('示例二', () => {
    const triangle = [[-10]];
    const expected = -10;
    expect(fn(triangle)).toBe(expected);
  });

  it('示例三', () => {
    const triangle = [[-1], [2, 3], [1, -1, -3]];
    const expected = -1;
    expect(fn(triangle)).toBe(expected);
  });
}
