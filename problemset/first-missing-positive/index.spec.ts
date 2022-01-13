import { firstMissingPositive } from './index';

describe('缺失的第一个正数', () => {
  describe('原地哈希表', () => {
    testCase(firstMissingPositive);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums: number[] = [1, 2, 0];
    const expected = 3;

    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums: number[] = [3, 4, -1, 1];
    const expected = 2;

    expect(fn(nums)).toBe(expected);
  });

  it('示例三', () => {
    const nums: number[] = [7, 8, 9, 11, 12];
    const expected = 1;

    expect(fn(nums)).toBe(expected);
  });

  it('示例四', () => {
    const nums: number[] = [3, 4, -1, 1];
    const expected = 2;

    expect(fn(nums)).toBe(expected);
  });

  it('示例五', () => {
    const nums: number[] = [2, 2];
    const expected = 1;

    expect(fn(nums)).toBe(expected);
  });
}
