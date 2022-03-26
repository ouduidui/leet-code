import { numTrees, numTrees2, numTrees3 } from '.';
import { describe, it, expect } from 'vitest';

describe('不同的二叉搜索树', () => {
  describe('回溯', function () {
    testCase(numTrees);
  });

  describe('动态规划', function () {
    testCase(numTrees2);
  });

  describe('数学', function () {
    testCase(numTrees3);
  });
});

function testCase(fn: (n: number) => number) {
  it.each([
    [3, 5],
    [1, 1]
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected);
  });
}
