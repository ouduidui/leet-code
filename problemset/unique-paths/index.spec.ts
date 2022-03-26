import { uniquePaths, uniquePaths2 } from '.';
import { describe, it, expect } from 'vitest';

describe('不同路径', () => {
  describe('组合数学', () => {
    testCase(uniquePaths);
  });

  describe('组合数学', () => {
    testCase(uniquePaths2);
  });
});

function testCase(fn: (m: number, n: number) => number) {
  it.each([
    [3, 7, 28],
    [3, 2, 3],
    [7, 3, 28],
    [3, 3, 6]
  ])('示例%#', (m, n, expected) => {
    expect(fn(m, n)).toBe(expected);
  });
}
