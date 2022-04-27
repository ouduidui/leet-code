# 零钱兑换

> 难度：中等
>
> https://leetcode-cn.com/problems/coin-change/

## 题目

给你一个整数数组 `coins` ，表示不同面额的硬币；以及一个整数 `amount` ，表示总金额。

计算并返回可以凑成总金额所需的 **最少的硬币个数** 。如果没有任何一种硬币组合能组成总金额，返回 `-1` 。

你可以认为每种硬币的数量是无限的。

### 示例

#### 示例 1：

```
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
```

#### 示例 2：

```
输入：coins = [2], amount = 3
输出：-1
```

#### 示例 3：

```
输入：coins = [1], amount = 0
输出：0
```

## 解题

### 深度优先搜索 + 记忆化搜索

```ts
/**
 * 深度优先搜索 + 记忆化搜索
 * @desc 时间复杂度 O(SN)  空间复杂度 O(S)
 * @param coins
 * @param amount
 * @returns
 */
export function coinChange(coins: number[], amount: number): number {
  if (amount < 1) return 0
  return dfs(new Array(amount).fill(0), coins, amount)

  function dfs(memo: number[], coins: number[], amount: number): number {
    if (amount < 0) return -1

    if (amount === 0) return 0

    if (memo[amount - 1] !== 0) return memo[amount - 1]

    let min = Number.MAX_VALUE
    for (let i = 0; i < coins.length; i++) {
      const res = dfs(memo, coins, amount - coins[i])
      if (res >= 0 && res < min)
        min = res + 1
    }

    memo[amount - 1] = (min === Number.MAX_VALUE ? -1 : min)
    return memo[amount - 1]
  }
}
```

### 动态规划

```ts
/**
 * 动态规划
 * @desc 时间复杂度 O(SN)  空间复杂度 O(S)
 * @param coins
 * @param amount
 * @returns
 */
export function coinChange2(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i)
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
}
```