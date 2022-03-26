import { maximalRectangle, maximalRectangle2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('最大矩形', () => {
  describe('暴力解法', () => {
    testCase(maximalRectangle);
  });

  describe('单调栈', () => {
    testCase(maximalRectangle2);
  });
});

function testCase(fn: (matrix: string[][]) => number) {
  it('示例一', () => {
    const matrix = [
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0']
    ];
    const expected = 6;
    expect(fn(matrix)).toBe(expected);
  });

  it('示例二', () => {
    const matrix: string[][] = [];
    const expected = 0;
    expect(fn(matrix)).toBe(expected);
  });

  it('示例三', () => {
    const matrix = [['0']];
    const expected = 0;
    expect(fn(matrix)).toBe(expected);
  });

  it('示例四', () => {
    const matrix = [['1']];
    const expected = 1;
    expect(fn(matrix)).toBe(expected);
  });

  it('示例五', () => {
    const matrix = [['0', '0']];
    const expected = 0;
    expect(fn(matrix)).toBe(expected);
  });
}
