# 按奇偶排序数组

> 难度：简单
>
> https://leetcode-cn.com/problems/sort-array-by-parity/

## 题目

给你一个整数数组 `nums`，将 `nums` 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。

返回满足此条件的 **任一数组** 作为答案。

### 示例

#### 示例 1：

```
输入：nums = [3,1,2,4]
输出：[2,4,3,1]
解释：[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。
```

#### 示例 2：

```
输入：nums = [0]
输出：[0]
```

## 解题

### 遍历

```ts 
/**
 * 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function sortArrayByParity(nums: number[]): number[] {
  const res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0)
      res.unshift(nums[i])
    else
      res.push(nums[i])
  }

  return res
}
```

### 原地交换

```ts
/**
 * 原地交换
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function sortArrayByParity2(nums: number[]): number[] {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    while (left < right && nums[left] % 2 === 0)
      left++

    while (left < right && nums[right] % 2 === 1)
      right--

    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }

  return nums
}
```