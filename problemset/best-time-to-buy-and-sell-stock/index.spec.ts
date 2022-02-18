import { maxProfit, maxProfit2 } from './index';

describe('买卖股票的最佳时机', () => {
  describe('暴力解法', () => {
    testCase(maxProfit);
  });

  describe('一次遍历', () => {
    testCase(maxProfit2);
  });
});

function testCase(fn: (prices: number[]) => number) {
  it('示例一', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const expected = 5;
    expect(fn(prices)).toBe(expected);
  });

  it('示例二', () => {
    const prices = [7, 6, 4, 3, 1];
    const expected = 0;
    expect(fn(prices)).toBe(expected);
  });
}
