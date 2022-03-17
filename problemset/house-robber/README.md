# 打家劫舍

> 难度：中等
>
> https://leetcode-cn.com/problems/house-robber/

## 题目

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯
一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被
小偷闯入，系统会自动报警。**

给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，
一夜之内能够偷窃到的最高金额。

### 示例

#### 示例 1：

```
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

#### 示例 2：

```
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

## 解题

### 回溯

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function rob(nums: number[]): number {
  let result = 0;
  dfs(nums, 0, 0);

  return result;

  function dfs(nums: number[], index: number, sum: number): void {
    if (index >= nums.length) return;
    dfs(nums, index + 1, sum);
    sum += nums[index];
    result = Math.max(sum, result);
    dfs(nums, index + 2, sum);
  }
}
```

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function rob2(nums: number[]): number {
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];

  let [first, second] = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < len; i++) {
    [first, second] = [second, Math.max(first + nums[i], second)];
  }

  return second;
}
```
