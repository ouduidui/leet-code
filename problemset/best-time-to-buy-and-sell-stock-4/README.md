# 买卖股票的最佳时机 IV

> 难度：困难
>
> https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/

## 题目

给定一个整数数组  `prices` ，它的第 i 个元素  `prices[i]` 是一支给定的股票在第
`i` 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 `k` 笔交易。

**注意** ：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

### 示例

#### 示例 1：

```
输入：k = 2, prices = [2,4,1]
输出：2
解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
```

#### 示例 2：

```
输入：k = 2, prices = [3,2,6,5,0,3]
输出：7
解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
```

## 解题

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(N min(N, k)) 空间复杂度 O(min(N, k))
 * @param k
 * @param prices
 */
export function maxProfit(k: number, prices: number[]): number {
  const len = prices.length;
  if (len === 0) return 0;

  // k只能ken/2
  k = Math.min(k, len >> 1);

  // 对于 prices[i] 中的价格而言，进行恰好 i 笔交易，并且当前手上持有一支股票，这种情况下的最大利润
  const buy: number[] = new Array(k + 1).fill(-Number.MAX_VALUE);
  buy[0] = -prices[0];

  // 用 sell[i] 表示恰好进行 i 笔交易，并且当前手上不持有股票，这种情况下的最大利润
  const sell: number[] = new Array(k + 1).fill(0);

  // 遍历所有天数
  for (let i = 1; i < len; i++) {
    // 更新第一次买入的价格
    buy[0] = Math.max(buy[0], sell[0] - prices[i]);
    // 遍历购买次数
    for (let j = 1; j <= k; j++) {
      // 更新第j次买入的价格
      buy[j] = Math.max(buy[j], sell[j] - prices[i]);
      // 更新第j次卖出的价格
      sell[j] = Math.max(sell[j], buy[j - 1] + prices[i]);
    }
  }

  return Math.max(...sell);
}
```
