# 买卖股票的最佳时机 II

> 难度：中等
>
> https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

## 题目

给定一个数组 `prices` ，其中 `prices[i]` 表示股票第 `i` 天的价格。

在每一天，你可能会决定购买和/或出售股票。你在任何时候 **最多** 只能持有 **一股**
股票。你也可以购买它，然后在 **同一天** 出售。 返回你能获得的 **最大** 利润 。

### 示例

#### 示例 1:

```
输入: prices = [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
```

#### 示例 2:

```
输入: prices = [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

#### 示例 3:

```
输入: prices = [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

## 解法

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param prices
 */
export function maxProfit(prices: number[]): number {
  const len = prices.length;
  const dp = new Array(len).fill([]).map(() => new Array(2).fill(0));
  // dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润
  dp[0][0] = 0;
  // dp[i][1] 表示第 i 天交易完后手里持有一支股票的最大利润
  dp[0][1] = -prices[0];
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(
      dp[i - 1][0] /* 保持不买股票 */,
      dp[i - 1][1] + prices[i] /* 把手上的股票卖了 */
    );
    dp[i][1] = Math.max(
      dp[i - 1][1] /* 保持不卖股票 */,
      dp[i - 1][0] - prices[i] /* 入股 */
    );
  }
  return dp[len - 1][0];
}
```

### 动态规划 + 优化空间

```typescript
/**
 * 动态规划 + 优化空间
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param prices
 */
export function maxProfit2(prices: number[]): number {
  const len = prices.length;
  // 表示第 i 天交易完后手里没有股票的最大利润
  let dp1 = 0;
  // 表示第 i 天交易完后手里持有一支股票的最大利润
  let dp2 = -prices[0];

  for (let i = 1; i < len; i++) {
    [dp1, dp2] = [
      Math.max(dp1 /* 保持不买股票 */, dp2 + prices[i] /* 把手上的股票卖了 */),
      Math.max(dp2 /* 保持不卖股票 */, dp1 - prices[i] /* 入股 */)
    ];
  }
  return dp1;
}
```

### 贪心算法

由于股票的购买没有限制，因此整个问题等价于寻找`x`个**不相交**的区间`(li,rj]`，使
得如下的等式最大化

 <img style="background: #fff;padding: 10px" src="https://latex.codecogs.com/svg.latex?\sum_x^{i=1}=a[r_i]-a[l_i]" />

其中`li`表示在`li`天买入，`ri`表示在`ri`天卖出。

同时我们注意到对于`(li,rj]`这一个区间贡献的价值`a[ri]-a[li]`，其实等价
于`(li,li + 1],(li + 1, li + 2], ... , (ri - 1, ri]`这些若干区间长度为 1 的区间
的价值和，即

 <img style="background: #fff;padding: 10px" src="https://latex.codecogs.com/svg.latex?a[r_i]-a[l_i]=(a[r_i]-a[r_i-1])+(a[r_i-1]-a[r_i-2])+...+(a[l_i+1]-a[l_i])" />

因此问题可以简化为找`x`个长度为`1`的区间`(li, li+1)`使得
<img style="background: #fff;padding: 10px" src="https://latex.codecogs.com/svg.latex?\sum_x^{i=1}=a[l_i+1]-a[l_i]" />
价值最大化。

贪心的角度考虑我们每次选择贡献大于 0 的区间既能使得答案最大化，因此最后答案为

 <img style="background: #fff;padding: 10px" src="https://latex.codecogs.com/svg.latex?ans=\sum_{n-1}^{i=1}=max\{0,a[i]-a[i-1]\}" />

其中`n`为数组的长度。

需要说明的是，贪心算法只能用于计算最大利润，**计算的过程并不是实际的交易过程**。

考虑题目中的例子`[1,2,3,4,5]`，数组长度`n=5`，由于对于所有的`1 ≤ i ≤ n`都
有`a[i] > a[i - 1]`，因此答案为

 <img style="background: #fff;padding: 10px" src="https://latex.codecogs.com/svg.latex?ans=\sum_{n-1}^{i=1}=a[i]-a[i-1]=4" />

但是实际的交易过程并不是 4 次买入和 4 次卖出，而是在第 1 天买入，第 5 天卖出。

```typescript
/**
 * 贪心算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param prices
 */
export function maxProfit3(prices: number[]): number {
  let ans = 0;
  const len = prices.length;
  for (let i = 1; i < len; i++) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;
}
```
