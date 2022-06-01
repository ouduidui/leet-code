# 火柴拼正方形

> 难度：中等
>
> https://leetcode.cn/problems/matchsticks-to-square/

## 题目

你将得到一个整数数组 `matchsticks` ，其中 `matchsticks[i]` 是第 `i` 个火柴棒的长度。你要用 **所有的火柴棍** 拼成一个正方形。你 **不能折断** 任何一根火柴棒，但你可以把它们连在一起，而且每根火柴棒必须 **使用一次** 。

如果你能使这个正方形，则返回 `true` ，否则返回 `false` 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/171316860-dab6982a-53be-4ba1-b831-5360622cecbd.png)

```
输入: matchsticks = [1,1,2,2,2]
输出: true
解释: 能拼成一个边长为2的正方形，每边两根火柴。
```

#### 示例 2：

```
输入: matchsticks = [3,3,3,3,4]
输出: false
解释: 不能用所有火柴拼成一个正方形。
```

## 解题

### 回溯

```ts 
/**
 * 回溯
 * @desc 时间复杂度 O(4^N)  空间复杂度 O(N)
 * @param matchsticks
 * @returns
 */
export function makesquare(matchsticks: number[]): boolean {
  const totalLen = matchsticks.reduce((acc, cur) => acc + cur, 0)
  if (totalLen % 4 !== 0) return false

  matchsticks.sort((a, b) => b - a)
  return dfs (0, matchsticks, [0, 0, 0, 0], totalLen / 4)

  function dfs(
    index: number,
    matchsticks: number[],
    edges: [number, number, number, number],
    len: number,
  ) {
    if (index === matchsticks.length) return true

    for (let i = 0; i < edges.length; i++) {
      edges[i] += matchsticks[index]
      if (edges[i] <= len && dfs(index + 1, matchsticks, edges, len)) return true
      edges[i] -= matchsticks[index]
    }
    return false
  }
}
```

### 状态压缩 + 动态规划

```ts
/**
 * 状态压缩 + 动态规划
 * @desc 时间复杂度 O(N*2^N)  空间复杂度 O(N)
 * @param matchsticks
 * @returns
 */
export function makesquare2(matchsticks: number[]): boolean {
  const totalLen = matchsticks.reduce((acc, cur) => acc + cur, 0)
  if (totalLen % 4 !== 0) return false

  const len = totalLen / 4
  const n = matchsticks.length
  const dp = new Array(1 << n).fill(-1)
  dp[0] = 0

  for (let s = 1; s < (1 << n); s++) {
    for (let k = 0; k < n; k++) {
      if ((s & (1 << k)) === 0) continue

      const s1 = s & ~(1 << k)
      if (dp[s1] >= 0 && dp[s1] + matchsticks[k] <= len) {
        dp[s] = (dp[s1] + matchsticks[k]) % len
        break
      }
    }
  }
  return dp[(1 << n) - 1] === 0
}
```