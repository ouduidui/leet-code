import { singleNumber, singleNumber2, singleNumber3, singleNumber4 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('只出现一次的数字 II', () => {
  describe('哈希表', () => {
    testCase(singleNumber);
  });

  describe('依次确定每一个二进制位', () => {
    testCase(singleNumber2);
  });

  describe('数字电路设计', () => {
    testCase(singleNumber3);
  });

  describe('数字电路设计优化', () => {
    testCase(singleNumber4);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [2, 2, 3, 2];
    const expected = 3;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [0, 1, 0, 1, 0, 1, 99];
    const expected = 99;
    expect(fn(nums)).toBe(expected);
  });
}
