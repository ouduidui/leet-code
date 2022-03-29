# 打家劫舍 II

> 难度：中等
>
> https://leetcode-cn.com/problems/house-robber-ii/

## 题目

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 **围成一圈** ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警** 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **在不触动警报装置的情况下** ，今晚能够偷窃到的最高金额。

 
### 示例 1：

```
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```

### 示例 2：

```
输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

### 示例 3：

```
输入：nums = [1,2,3]
输出：3
```

## 解题

### 回溯

```ts
/**
 * 回溯
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function rob(nums: number[]): number {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(...nums)

  let res = 0
  backTrack(0, 0, true)
  backTrack(1, 0, false)
  return res

  function backTrack(idx: number, sum: number, hasFirst: boolean) {
    if (idx >= nums.length - 1) {
      if (idx === nums.length - 1)
        sum += hasFirst ? 0 : nums[idx]

      res = Math.max(res, sum)
    }
    else {
      backTrack(idx + 1, sum, hasFirst)
      backTrack(idx + 2, sum + nums[idx], hasFirst)
      backTrack(idx + 3, sum + nums[idx], hasFirst)
    }
  }
}
```

### 动态规划

```ts
/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function rob2(nums: number[]): number {
  const len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]
  if (len === 2) return Math.max(...nums)

  return Math.max(robRange(0, len - 2), robRange(1, len - 1))

  function robRange(start: number, end: number) {
    let [prev, cur] = [nums[start], Math.max(nums[start], nums[start + 1])]
    for (let i = start + 2; i <= end; i++)
      [prev, cur] = [cur, Math.max(prev + nums[i], cur)]

    return cur
  }
}
```