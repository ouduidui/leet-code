# 除自身以外数组的乘积

> 难度：中等
>
> https://leetcode-cn.com/problems/product-of-array-except-self/

## 题目

给你一个整数数组 `nums`，返回 *数组 `answer`* ，其中 `answer[i]` 等于 `nums` 中除 `nums[i]` 之外其余各元素的乘积 。

题目数据 **保证** 数组 `nums`之中任意元素的全部前缀元素和后缀的乘积都在  **32 位** 整数范围内。

请不要使用除法，且在 O(n) 时间复杂度内完成此题。

### 示例

#### 示例 1:

```
输入: nums = [1,2,3,4]
输出: [24,12,8,6]
```

#### 示例 2:

```
输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
```

## 解题

### 暴力解法

```ts
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function productExceptSelf(nums: number[]): number[] {
  const ans: number[] = []

  const len = nums.length
  for (let i = 0; i < len; i++) {
    let prod = 1
    for (let j = 0; j < len; j++) {
      if (j !== i)
        prod *= nums[j]
    }
    ans.push(prod)
  }

  return ans
}
```

### 左右乘积列表

```ts
/**
 * 左右乘积列表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function productExceptSelf2(nums: number[]): number[] {
  const len = nums.length

  const left: number[] = []
  left[0] = 1
  for (let i = 1; i < len; i++)
    left[i] = nums[i - 1] * left[i - 1]

  const right: number[] = []
  right[len - 1] = 1
  for (let i = len - 2; i >= 0; i--)
    right[i] = nums[i + 1] * right[i + 1]

  const ans: number[] = []
  for (let i = 0; i < len; i++)
    ans[i] = left[i] * right[i]

  return ans
}
```

### 左右乘积列表 - 优化

```ts
/**
 * 左右乘积列表 - 优化
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function productExceptSelf3(nums: number[]): number[] {
  const len = nums.length
  const ans: number[] = []

  ans[0] = 1
  for (let i = 1; i < len; i++)
    ans[i] = nums[i - 1] * ans[i - 1]

  let right = 1

  for (let i = len - 1; i >= 0; i--) {
    ans[i] = ans[i] * right
    right *= nums[i]
  }

  return ans
}
```