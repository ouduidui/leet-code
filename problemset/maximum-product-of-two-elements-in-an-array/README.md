# 数组中的两元素的最大乘积

> 难度：简单
>
> https://leetcode.cn/problems/maximum-product-of-two-elements-in-an-array/

## 题目

给你一个整数数组 `nums`，请你选择数组的两个不同下标 `i` 和 `j`，使 `(nums[i]-1)*(nums[j]-1)` 取得最大值。

请你计算并返回该式的最大值。

### 示例

#### 示例 1：

```
输入：nums = [3,4,5,2]
输出：12 
解释：如果选择下标 i=1 和 j=2（下标从 0 开始），则可以获得最大值，(nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12 。 
```

#### 示例 2：

```
输入：nums = [1,5,4,5]
输出：16
解释：选择下标 i=1 和 j=3（下标从 0 开始），则可以获得最大值 (5-1)*(5-1) = 16 。
```

#### 示例 3：

```
输入：nums = [3,7]
输出：12
```

## 解题

### 排序

```ts 
/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function maxProduct(nums: number[]): number {
  nums.sort((a, b) => a - b)
  return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1)
}
```

### 一次遍历

```ts 
/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function maxProduct2(nums: number[]): number {
  let a = nums[0]; let b = nums[1]
  if (a < b) {
    const temp = a
    a = b
    b = temp
  }
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > a) {
      b = a
      a = nums[i]
    }
    else if (nums[i] > b) {
      b = nums[i]
    }
  }
  return (a - 1) * (b - 1)
}
```