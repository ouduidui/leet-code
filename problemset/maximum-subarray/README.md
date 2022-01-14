# 最大子数组和

> 难度：简单
>
> https://leetcode-cn.com/problems/maximum-subarray/

## 题目

给你一个整数数组 `nums` ，请你找出一个具有最大和的连续子数组（子数组最少包含一个
元素），返回其最大和。

子数组 是数组中的一个连续部分。

### 示例

#### 示例 1：

```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

#### 示例 2：

```
输入：nums = [1]
输出：1
```

#### 示例 3：

```
输入：nums = [5,4,-1,7,8]
输出：23
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(NlogN)   空间复杂度 (1)
 * @param nums
 */
export function maxSubArray(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      ans = Math.max(ans, sum);
    }
  }

  return ans;
}
```

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums
 */
export function maxSubArray2(nums: number[]): number {
  let prevSum = 0;
  let ans = nums[0];

  nums.forEach((num) => {
    prevSum = Math.max(num, prevSum + num);
    ans = Math.max(prevSum, ans);
  });

  return ans;
}
```
