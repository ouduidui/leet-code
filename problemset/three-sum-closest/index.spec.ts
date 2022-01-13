import { threeSumClosest } from './index';

describe('最接近的三数之和', () => {
  describe('排序+双指针', () => {
    testCase(threeSumClosest);
  });
});

function testCase(fn: (nums: number[], target: number) => number) {
  test('示例一', () => {
    const nums: number[] = [-1, 2, 1, -4];
    const target = 1;
    const expected = 2;

    expect(fn(nums, target)).toBe(expected);
  });

  test('示例二', () => {
    const nums: number[] = [1, 1, -1, -1, 3];
    const target = 1;
    const expected = 1;

    expect(fn(nums, target)).toBe(expected);
  });

  test('示例三', () => {
    const nums: number[] = [-1, 0, 1, 1, 55];
    const target = 3;
    const expected = 2;

    expect(fn(nums, target)).toBe(expected);
  });
}
