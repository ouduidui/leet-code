import { search } from './index';

describe('搜索旋转排序数组 II', () => {
  testCase(search);
});

function testCase(fn: (nums: number[], target: number) => boolean) {
  it('示例一', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2];
    const target = 0;
    const expected = true;
    expect(fn(nums, target)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2];
    const target = 3;
    const expected = false;
    expect(fn(nums, target)).toBe(expected);
  });

  it('示例三', () => {
    const nums = [1, 0, 1, 1, 1];
    const target = 0;
    const expected = true;
    expect(fn(nums, target)).toBe(expected);
  });
}
