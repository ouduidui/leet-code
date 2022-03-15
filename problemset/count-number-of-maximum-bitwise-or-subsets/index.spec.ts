import { countMaxOrSubsets, countMaxOrSubsets2 } from '.';

describe('统计按位或能得到最大值的子集数目', () => {
  describe('回溯', () => {
    testCase(countMaxOrSubsets);
  });

  describe('位运算', () => {
    testCase(countMaxOrSubsets2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [3, 1];
    const expected = 2;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [2, 2, 2];
    const expected = 7;
    expect(fn(nums)).toBe(expected);
  });

  it('示例三', () => {
    const nums = [3, 2, 1, 5];
    const expected = 6;
    expect(fn(nums)).toBe(expected);
  });
}
