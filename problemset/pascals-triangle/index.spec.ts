import { generate } from './index';

describe('杨辉三角', () => {
  testCase(generate);
});

function testCase(fn: (numRows: number) => number[][]) {
  it('示例一', () => {
    const numRows = 5;
    const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
    expect(fn(numRows)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const numRows = 1;
    const expected = [[1]];
    expect(fn(numRows)).toStrictEqual(expected);
  });
}
