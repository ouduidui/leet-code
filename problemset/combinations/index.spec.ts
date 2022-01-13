import { twoDimensionalArrayEqual } from '../../utils/tools';
import { combine } from './index';

describe('组合', () => {
  testCase(combine);
});

function testCase(fn: (n: number, k: number) => number[][]) {
  it('示例一', () => {
    const n = 4;
    const k = 2;
    const expected = [
      [2, 4],
      [3, 4],
      [2, 3],
      [1, 2],
      [1, 3],
      [1, 4]
    ];
    twoDimensionalArrayEqual(fn(n, k), expected);
  });

  it('示例二', () => {
    const n = 1;
    const k = 1;
    const expected = [[1]];
    twoDimensionalArrayEqual(fn(n, k), expected);
  });
}
