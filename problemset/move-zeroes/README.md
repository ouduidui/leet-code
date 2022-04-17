# 移动零

> 难度：简单
>
> https://leetcode-cn.com/problems/move-zeroes/

## 题目

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**请注意**，必须在不复制数组的情况下原地对数组进行操作。

### 示例

#### 示例 1:

```
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

#### 示例 2:

```
输入: nums = [0]
输出: [0]
```

## 解题

```ts
/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function moveZeroes(nums: number[]): void {
  if (nums.length <= 1) return

  let slow = 0
  let fast = 0

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
    fast++
  }
}
```