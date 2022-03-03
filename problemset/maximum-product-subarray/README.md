# 乘积最大子数组

> 难度：中等
>
> https://leetcode-cn.com/problems/maximum-product-subarray/

## 题目

给你一个整数数组 `nums` ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少
包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 **32 位** 整数。

**子数组** 是数组的连续子序列。

### 示例

#### 示例 1:

```
输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```

#### 示例 2:

```
输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
```

## 解题

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 */
export function maxProduct(nums: number[]): number {
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];

  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < len; i++) {
    let sum = nums[i];
    for (let j = i; j < len; j++) {
      if (j !== i) {
        sum *= nums[j];
      }
      result = Math.max(result, sum);
    }
  }

  return result;
}
```

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function maxProduct2(nums: number[]): number {
  // 维护当前乘积的最大值
  let max = nums[0];
  // 维护当前乘积的最小值
  let min = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const cur1 = max * nums[i];
    const cur2 = min * nums[i];

    // 更新值
    max = Math.max(cur1, cur2, nums[i]);
    min = Math.min(cur1, cur2, nums[i]);
    // 更新结果
    result = Math.max(result, max);
  }

  return result;
}
```
