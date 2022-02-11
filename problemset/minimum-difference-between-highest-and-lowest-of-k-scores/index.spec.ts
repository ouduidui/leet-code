import { minimumDifference } from './index';

describe('学生分数的最小差值', () => {
  testCase(minimumDifference);
});

function testCase(fn: (nums: number[], k: number) => number) {
  it('示例一', () => {
    const nums = [90];
    const k = 1;
    const expected = 0;
    expect(fn(nums, k)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [9, 4, 1, 7];
    const k = 2;
    const expected = 2;
    expect(fn(nums, k)).toBe(expected);
  });
}
