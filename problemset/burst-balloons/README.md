# 戳气球

> 难度：困难
>
> https://leetcode-cn.com/problems/burst-balloons/

## 题目

有 `n` 个气球，编号为 `0` 到 `n - 1`，每个气球上都标有一个数字，这些数字存在数组 `nums` 中。

现在要求你戳破所有的气球。戳破第 `i` 个气球，你可以获得 `nums[i - 1] * nums[i] * nums[i + 1]` 枚硬币。 这里的 `i - 1` 和 `i + 1` 代表和 `i` 相邻的两个气球的序号。如果 `i - 1` 或 `i + 1` 超出了数组的边界，那么就当它是一个数字为 `1 `的气球。

求所能获得硬币的最大数量。

### 示例

#### 示例 1：

```
输入：nums = [3,1,5,8]
输出：167
解释：
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
```

#### 示例 2：

```
输入：nums = [1,5]
输出：10
```

## 解题

### 记忆化搜索

```ts
/**
 * 记忆化搜索
 * @desc 时间复杂度 O(N³)  空间复杂度 O(N²)
 * @param nums
 * @returns
 */
export function maxCoins(nums: number[]): number {
  const len = nums.length
  return solve(
    0,
    len + 1,
    [1, ...nums, 1],
    new Array(len + 2).fill([]).map(() => new Array(len + 2).fill(-1)),
  )

  function solve(
    left: number,
    right: number,
    val: number[],
    rec: number[][],
  ): number {
    if (left >= right - 1) return 0
    // 记忆化搜索
    if (rec[left][right] !== -1) return rec[left][right]

    // 枚举每一种情况
    for (let i = left + 1; i < right; i++) {
      let sum = val[left] * val[i] * val[right]
      sum += solve(left, i, val, rec) + solve(i, right, val, rec)
      rec[left][right] = Math.max(rec[left][right], sum)
    }

    return rec[left][right]
  }
}
```

### 动态规划

```ts
/**
 * 动态规划
 * @desc 时间复杂度 O(N³)  空间复杂度 O(N²)
 * @param nums
 * @returns
 */
export function maxCoins2(nums: number[]): number {
  const len = nums.length
  const val = [1, ...nums, 1]
  const dp = new Array(len + 2).fill([]).map(() => new Array(len + 2).fill(0))

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 2; j <= len + 1; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + val[i] * val[j] * val[k],
        )
      }
    }
  }
  return dp[0][len + 1]
}
```