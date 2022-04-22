# 最佳买卖股票时机含冷冻期

> 难度：中等
>
> https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

## 题目

给定一个整数数组`prices`，其中第  `prices[i]` 表示第 `i` 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

- 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

### 示例 

#### 示例 1:

```
输入: prices = [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
```

#### 示例 2:

```
输入: prices = [1]
输出: 0
```

## 解题

```ts
/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param prices
 * @returns
 */
export function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0

  const len = prices.length
  let f0 = -prices[0]
  let f1 = 0
  let f2 = 0

  for (let i = 1; i < len; i++)
    [f0, f1, f2] = [Math.max(f0, f2 - prices[i]), f0 + prices[i], Math.max(f1, f2)]

  return Math.max(f1, f2)
}
```