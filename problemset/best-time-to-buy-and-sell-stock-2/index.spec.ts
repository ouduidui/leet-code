import { maxProfit, maxProfit2, maxProfit3 } from './index';

describe('买卖股票的最佳时机 II', () => {
  describe('动态规划', () => {
    testCase(maxProfit);
  });

  describe('动态规划 + 优化空间', () => {
    testCase(maxProfit2);
  });

  describe('贪心算法', () => {
    testCase(maxProfit3);
  });
});

function testCase(fn: (prices: number[]) => number) {
  it('示例一', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const expected = 7;
    expect(fn(prices)).toBe(expected);
  });

  it('示例二', () => {
    const prices = [1, 2, 3, 4, 5];
    const expected = 4;
    expect(fn(prices)).toBe(expected);
  });

  it('示例三', () => {
    const prices = [7, 6, 4, 3, 1];
    const expected = 0;
    expect(fn(prices)).toBe(expected);
  });
}
