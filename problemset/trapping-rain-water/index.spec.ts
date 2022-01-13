import { trap, trap2, trap3 } from './index';

describe('接雨水', () => {
  describe('动态规划', () => {
    testCase(trap);
  });

  describe('单调栈', () => {
    testCase(trap2);
  });

  describe('双指针', () => {
    testCase(trap3);
  });
});

function testCase(fn: (height: number[]) => number) {
  it('示例一', () => {
    const height: number[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const expected = 6;

    expect(fn(height)).toBe(expected);
  });

  it('示例二', () => {
    const height: number[] = [4, 2, 0, 3, 2, 5];
    const expected = 9;

    expect(fn(height)).toBe(expected);
  });
}
