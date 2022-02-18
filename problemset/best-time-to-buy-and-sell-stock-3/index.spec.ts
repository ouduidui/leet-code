import { maxProfit } from './index';

describe('买卖股票的最佳时机 III', () => {
  testCase(maxProfit);
});

function testCase(fn: (prices: number[]) => number) {
  it('示例一', () => {
    const prices = [3, 3, 5, 0, 0, 3, 1, 4];
    const expected = 6;
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

  it('示例四', () => {
    const prices = [1];
    const expected = 0;
    expect(fn(prices)).toBe(expected);
  });
}
