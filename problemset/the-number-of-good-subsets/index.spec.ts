import { numberOfGoodSubsets } from '.';
import { describe, it, expect } from 'vitest';

describe('好子集的数目', () => {
  testCase(numberOfGoodSubsets);
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    [[1, 2, 3, 4], 6],
    [[4, 2, 3, 15], 5]
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected);
  });
}
