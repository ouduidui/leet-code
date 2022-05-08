# 数组中重复的数据

> 难度：中等
>
> https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/

## 题目

给你一个长度为 `n` 的整数数组 `nums` ，其中 `nums` 的所有整数都在范围 `[1, n]` 内，且每个整数出现 **一次** 或 **两次** 。请你找出所有出现 **两次** 的整数，并以数组形式返回。

你必须设计并实现一个时间复杂度为 `O(n)` 且仅使用常量额外空间的算法解决此问题。

 

#### 示例 1：

```
输入：nums = [4,3,2,7,8,2,3,1]
输出：[2,3]
```

#### 示例 2：

```
输入：nums = [1,1,2]
输出：[1]
```

#### 示例 3：

```
输入：nums = [1]
输出：[]
```

## 解题

### 将元素交换到对应的位置

```ts 
/**
 * 将元素交换到对应的位置
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicates(nums: number[]): number[] {
  const swap = (i: number, j: number) =>
    [nums[i], nums[j]] = [nums[j], nums[i]]

  const len = nums.length

  for (let i = 0; i < len; i++) {
    while (nums[i] !== nums[nums[i] - 1])
      swap(i, nums[i] - 1)
  }

  const ans: number[] = []
  for (let i = 0; i < len; i++) {
    if (i !== nums[i] - 1)
      ans.push(nums[i])
  }

  return ans
}
```

### 使用正负号作为标记

```ts 
/**
 * 使用正负号作为标记
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicates2(nums: number[]): number[] {
  const len = nums.length
  const ans: number[] = []
  for (let i = 0; i < len; ++i) {
    const x = Math.abs(nums[i])
    if (nums[x - 1] > 0)
      nums[x - 1] = -nums[x - 1]
    else
      ans.push(x)
  }
  return ans
}
```