# 和至少为 K 的最短子数组

> 难度：困难
>
> https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/

## 题目

给你一个整数数组 `nums` 和一个整数 `k` ，找出 `nums` 中和至少为 `k` 的 **最短非空子数组** ，并返回该子数组的长度。如果不存在这样的 **子数组** ，返回 `-1` 。

**子数组** 是数组中 **连续** 的一部分。

### 示例

#### 示例 1：

```
输入：nums = [1], k = 1
输出：1
```

#### 示例 2：

```
输入：nums = [1,2], k = 4
输出：-1
```

#### 示例 3：

```
输入：nums = [2,-1,2], k = 3
输出：3
```

## 解题

```ts 
/**
 * 前缀和 + 单调双端队列
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param nums
 * @param k
 * @returns
 */
export function shortestSubarray(nums: number[], k: number): number {
  const n = nums.length
  const preSumArr = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++)
    preSumArr[i + 1] = preSumArr[i] + nums[i]

  let res = n + 1
  const queue = []
  for (let i = 0; i <= n; i++) {
    const curSum = preSumArr[i]
    while (queue.length !== 0 && curSum - preSumArr[queue[0]] >= k)
      res = Math.min(res, i - queue.shift()!)

    while (queue.length !== 0 && preSumArr[queue[queue.length - 1]] >= curSum)
      queue.pop()

    queue.push(i)
  }
  return res < n + 1 ? res : -1
}
```