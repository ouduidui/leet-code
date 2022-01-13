import { totalNQueens } from './index';

describe('N皇后 II', () => {
  testCase(totalNQueens);
});

function testCase(fn: (n: number) => number) {
  it('示例一', () => {
    const n = 4;
    const expected = 2;

    expect(fn(n)).toBe(expected);
  });

  it('示例二', () => {
    const n = 1;
    const expected = 1;

    expect(fn(n)).toBe(expected);
  });
}
