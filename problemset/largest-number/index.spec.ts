import { largestNumber } from './index';

describe('最大数', () => {
  testCase(largestNumber);
});

function testCase(fn: (nums: number[]) => string) {
  it('示例一', () => {
    const nums = [10, 2];
    const expected = '210';
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [3, 30, 34, 5, 9];
    const expected = '9534330';
    expect(fn(nums)).toBe(expected);
  });

  it('示例三', () => {
    const nums = [111311, 1113];
    const expected = '1113111311';
    expect(fn(nums)).toBe(expected);
  });
}
