import {
  majorityElement,
  majorityElement2,
  majorityElement3,
  majorityElement4
} from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('多数元素', () => {
  describe('哈希表', () => {
    testCase(majorityElement);
  });

  describe('排序', () => {
    testCase(majorityElement2);
  });

  describe('分治法', () => {
    testCase(majorityElement3);
  });

  describe('Boyer-Moore 投票算法', () => {
    testCase(majorityElement4);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    const nums = [3, 2, 3];
    const expected = 3;
    expect(fn(nums)).toBe(expected);
  });

  it('示例二', () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    const expected = 2;
    expect(fn(nums)).toBe(expected);
  });
}
