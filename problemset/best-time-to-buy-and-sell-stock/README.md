# 买卖股票的最佳时机

> 难度：简单
>
> https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

## 题目

给定一个数组 `prices` ，它的第 `i` 个元素 `prices[i]` 表示一支给定股票第 `i` 天
的价格。

你只能选择 **某一天** 买入这只股票，并选择在 **未来的某一个不同的日子** 卖出该股
票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 `0` 。

### 示例

#### 示例 1：

```
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```

#### 示例 2：

```
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param prices
 */
export function maxProfit(prices: number[]): number {
  const len = prices.length;
  let result = 0;
  for (let i = 0; i < len - 1; i++) {
    const price1 = prices[i];
    let price2 = price1;
    for (let j = i + 1; j < len; j++) {
      price2 = Math.max(price2, prices[j]);
    }
    result = Math.max(result, price2 - price1);
  }

  return result;
}
```

### 一次遍历

```typescript
/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param prices
 */
export function maxProfit2(prices: number[]): number {
  let minPrice = Number.MAX_VALUE;
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > result) {
      result = prices[i] - minPrice;
    }
  }

  return result;
}
```
