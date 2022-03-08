import { platesBetweenCandles } from './index';

describe('蜡烛之间的盘子', () => {
  testCase(platesBetweenCandles);
});

function testCase(fn: (s: string, queries: number[][]) => number[]) {
  it('示例一', () => {
    const s = '**|**|***|';
    const queries = [
      [2, 5],
      [5, 9]
    ];
    const expected = [2, 3];
    expect(fn(s, queries)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const s = '***|**|*****|**||**|*';
    const queries = [
      [1, 17],
      [4, 5],
      [14, 17],
      [5, 11],
      [15, 16]
    ];
    const expected = [9, 0, 0, 0, 0];
    expect(fn(s, queries)).toStrictEqual(expected);
  });
}
