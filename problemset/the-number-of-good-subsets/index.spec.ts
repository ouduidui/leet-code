import { numberOfGoodSubsets } from './index';

describe('好子集的数目', () => {
  testCase(numberOfGoodSubsets);
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [1, 2, 3, 4];
    const expected = 6;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [4, 2, 3, 15];
    const expected = 5;
    expect(fn(nums)).toBe(expected);
  });
}
