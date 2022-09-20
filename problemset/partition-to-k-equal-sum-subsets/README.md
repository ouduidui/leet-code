# 划分为k个相等的子集

> 难度：中等
>
> https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/

## 题目

给定一个整数数组 `nums` 和一个正整数 `k`，找出是否有可能把这个数组分成 `k` 个非空子集，其总和都相等。

### 示例

#### 示例 1：

```
输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
输出： True
说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
```

#### 示例 2:

```
输入: nums = [1,2,3,4], k = 3
输出: false
```

## 解题

```ts 
/**
 * 状态压缩 + 动态规划
 * @desc 时间复杂度 O(N2^N)  空间复杂度 O(2^N)
 * @param nums
 * @param k
 * @returns
 */
export function canPartitionKSubsets(nums: number[], k: number): boolean {
  const all = nums.reduce((acc, cur) => acc + cur, 0)
  if (all % k !== 0)
    return false

  const per = all / k
  nums.sort((a, b) => a - b)
  const n = nums.length
  if (nums[n - 1] > per)
    return false

  const dp = new Array(1 << n).fill(false)
  const curSum = new Array(1 << n).fill(0)
  dp[0] = true
  for (let i = 0; i < 1 << n; i++) {
    if (!dp[i])
      continue

    for (let j = 0; j < n; j++) {
      if (curSum[i] + nums[j] > per)
        break

      if (((i >> j) & 1) === 0) {
        const next = i | (1 << j)
        if (!dp[next]) {
          curSum[next] = (curSum[i] + nums[j]) % per
          dp[next] = true
        }
      }
    }
  }
  return dp[(1 << n) - 1]
}
```