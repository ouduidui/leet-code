# 多米诺和托米诺平铺

> 难度：中等
>
> https://leetcode.cn/problems/domino-and-tromino-tiling/

## 题目

有两种形状的瓷砖：一种是 `2 x 1` 的多米诺形，另一种是形如 "L" 的托米诺形。两种形状都可以旋转。

![image](https://user-images.githubusercontent.com/54696834/201465278-ecd93a7c-0d91-4a23-8c98-7d4198fdff45.png)

给定整数 `n` ，返回可以平铺 `2 x n` 的面板的方法的数量。返回对 `10^9 + 7` **取模** 的值。

平铺指的是每个正方形都必须有瓷砖覆盖。两个平铺不同，当且仅当面板上有四个方向上的相邻单元中的两个，使得恰好有一个平铺有一个瓷砖占据两个正方形。

### 示例

#### 示例 1:

![image](https://user-images.githubusercontent.com/54696834/201465293-a36fd73b-10ae-4f60-876b-2800c4500b43.png)

```
输入: n = 3
输出: 5
解释: 五种不同的方法如上所示。
```

#### 示例 2:

```
输入: n = 1
输出: 1
```

## 解题

```ts 
/**
 * 动态规划
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param n
 * @returns
 */
export function numTilings(n: number): number {
  const mod = 1e9 + 7
  const dp = new Array(n + 1).fill(0).map(() => new Array(4).fill(0))
  dp[0][3] = 1
  for (let i = 1; i <= n; i++) {
    dp[i][0] = dp[i - 1][3]
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % mod
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % mod
    dp[i][3] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]) % mod
  }
  return dp[n][3]
}
```