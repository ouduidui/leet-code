import { jump, jump2 } from './index';

describe('跳跃游戏 II', () => {
  describe('贪心算法 - 反向查找', () => {
    testCase(jump);
  });

  describe('贪心算法 - 正向查找', () => {
    testCase(jump2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [2, 3, 1, 1, 4];
    const expected = 2;

    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [2, 3, 0, 1, 4];
    const expected = 2;

    expect(fn(nums)).toBe(expected);
  });
}
