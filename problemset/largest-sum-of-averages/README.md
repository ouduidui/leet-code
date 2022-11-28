# 最大平均值和的分组

> 难度：中等
>
> https://leetcode.cn/problems/largest-sum-of-averages/

## 题目

给定数组 `nums` 和一个整数 `k` 。我们将给定的数组 `nums` 分成 **最多 `k` 个相邻的非空子数组** 。 **分数** 由每个子数组内的平均值的总和构成。

注意我们必须使用 `nums` 数组中的每一个数进行分组，并且分数不一定需要是整数。

返回我们所能得到的最大 **分数** 是多少。答案误差在 `10^-6` 内被视为是正确的。

### 示例

#### 示例 1:

```
输入: nums = [9,1,2,3,9], k = 3
输出: 20.00000
解释: 
nums 的最优分组是[9], [1, 2, 3], [9]. 得到的分数是 9 + (1 + 2 + 3) / 3 + 9 = 20. 
我们也可以把 nums 分成[9, 1], [2], [3, 9]. 
这样的分组得到的分数为 5 + 2 + 6 = 13, 但不是最大值.
```

#### 示例 2:

```
输入: nums = [1,2,3,4,5,6,7], k = 4
输出: 20.50000
```

## 解题

```ts 
/**
 * 动态规划
 * @desc 时间复杂度 O(KN^2) 空间复杂度 O(KN)
 * @param nums
 * @param k
 * @returns
 */
export function largestSumOfAverages(nums: number[], k: number): number {
  const n = nums.length
  const prefix: number[] = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++)
    prefix[i + 1] = prefix[i] + nums[i]

  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++)
    dp[i] = prefix[i] / i

  for (let j = 2; j <= k; j++) {
    for (let i = n; i >= j; i--) {
      for (let x = j - 1; x < i; x++)
        dp[i] = Math.max(dp[i], dp[x] + (prefix[i] - prefix[x]) / (i - x))
    }
  }
  return dp[n]
}
```