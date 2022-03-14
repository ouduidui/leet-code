import { maxProfit } from '.';

describe('买卖股票的最佳时机 IV', () => {
  testCase(maxProfit);
});

function testCase(fn: (k: number, prices: number[]) => number) {
  it('示例一', () => {
    const k = 2;
    const prices = [2, 4, 1];
    const expected = 2;
    expect(fn(k, prices)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const k = 2;
    const prices = [3, 2, 6, 5, 0, 3];
    const expected = 7;
    expect(fn(k, prices)).toStrictEqual(expected);
  });
}
