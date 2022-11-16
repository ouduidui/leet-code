# 全局倒置与局部倒置

> 难度：中等
>
> https://leetcode.cn/problems/global-and-local-inversions/

## 题目

给你一个长度为 `n` 的整数数组 `nums` ，表示由范围 `[0, n - 1]` 内所有整数组成的一个排列。

全局倒置 的数目等于满足下述条件不同下标对 `(i, j)` 的数目：

- `0 <= i < j < n`
- `nums[i] > nums[j]`

**局部倒置** 的数目等于满足下述条件的下标 `i` 的数目：

- `0 <= i < n - 1`
- `nums[i] > nums[i + 1]`

当数组 `nums` 中 **全局倒置** 的数量等于 局部倒置 的数量时，返回 `true` ；否则，返回 `false` 。

### 示例

#### 示例 1：

```
输入：nums = [1,0,2]
输出：true
解释：有 1 个全局倒置，和 1 个局部倒置。
```

#### 示例 2：

```
输入：nums = [1,2,0]
输出：false
解释：有 2 个全局倒置，和 1 个局部倒置。
```

## 解题

### 维护后缀最小值

```ts 
/**
 * 维护后缀最小值
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function isIdealPermutation(nums: number[]): boolean {
  const n = nums.length
  let minSuff = nums[n - 1]
  for (let i = n - 3; i >= 0; i--) {
    if (nums[i] > minSuff)
      return false

    minSuff = Math.min(minSuff, nums[i + 1])
  }
  return true
}
```

### 归纳证明

```ts
/**
 * 归纳证明
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function isIdealPermutation2(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i] - i) > 1)
      return false
  }
  return true
}
```