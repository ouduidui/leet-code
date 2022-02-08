import { gridIllumination } from './index';

describe('网格照明', () => {
  testCase(gridIllumination);
});

function testCase(
  fn: (n: number, lamps: number[][], queries: number[][]) => number[]
) {
  it('示例一', () => {
    const n = 5;
    const lamps = [
      [0, 0],
      [4, 4]
    ];
    const queries = [
      [1, 1],
      [1, 0]
    ];
    const expected = [1, 0];
    expect(fn(n, lamps, queries)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const n = 5;
    const lamps = [
      [0, 0],
      [4, 4]
    ];
    const queries = [
      [1, 1],
      [1, 1]
    ];
    const expected = [1, 1];
    expect(fn(n, lamps, queries)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const n = 5;
    const lamps = [
      [0, 0],
      [0, 4]
    ];
    const queries = [
      [0, 4],
      [0, 1],
      [1, 4]
    ];
    const expected = [1, 1, 0];
    expect(fn(n, lamps, queries)).toStrictEqual(expected);
  });
}
