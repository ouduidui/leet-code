import { rotate, rotate2, rotate3 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('旋转图片', () => {
  describe('使用辅助数组', () => {
    testCase(rotate);
  });

  describe('原地旋转', () => {
    testCase(rotate2);
  });

  describe('用翻转代替旋转', () => {
    testCase(rotate3);
  });
});

function testCase(fn: (matrix: number[][]) => void) {
  it('示例一', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ];

    fn(matrix);
    expect(matrix).toEqual(expected);
  });

  it('示例二', () => {
    const matrix = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16]
    ];
    const expected = [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11]
    ];

    fn(matrix);
    expect(matrix).toEqual(expected);
  });

  it('示例三', () => {
    const matrix = [[1]];
    const expected = [[1]];

    fn(matrix);
    expect(matrix).toEqual(expected);
  });

  it('示例四', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ];
    const expected = [
      [3, 1],
      [4, 2]
    ];

    fn(matrix);
    expect(matrix).toEqual(expected);
  });
}
