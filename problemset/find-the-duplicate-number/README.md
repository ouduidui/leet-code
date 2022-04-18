# 寻找重复数

> 难度：中等
>
> https://leetcode-cn.com/problems/find-the-duplicate-number/

## 题目

给定一个包含 `n + 1` 个整数的数组 `nums` ，其数字都在 `[1, n]` 范围内（包括 `1 `和 `n`），可知至少存在一个重复的整数。

假设` nums` 只有 **一个重复的整数** ，**返回** 这个重复的数 。

你设计的解决方案必须 **不修改** 数组 `nums` 且只用常量级 `O(1)` 的额外空间。

### 示例

#### 示例 1：

```
输入：nums = [1,3,4,2,2]
输出：2
```

#### 示例 2：

```
输入：nums = [3,1,3,4,2]
输出：3
```

## 解题

### 暴力解法

```ts
/**
 * 暴力解法
 * @desc 时间复杂度 O(N²)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicate(nums: number[]): number {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++)
      if (nums[i] === nums[j]) return nums[i]
  }
  return -1
}
```

### 二分查找

```ts
/**
 * 二分查找
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicate2(nums: number[]): number {
  const len = nums.length
  let left = 1
  let right = len - 1
  let ans = -1

  while (left <= right) {
    const mid = (left + right) >> 1
    let count = 0
    // 记录小于 mid 的个数
    for (let i = 0; i < len; i++)
      nums[i] <= mid && count++

    if (count <= mid) {
      left = mid + 1
    }
    else {
      right = mid - 1
      ans = mid
    }
  }

  return ans
}
```

### 二进制

```ts
/**
 * 二进制
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicate3(nums: number[]): number {
  const len = nums.length
  let ans = 0
  // 确定二进制下的最高位
  let maxBit = 31
  while (!((len - 1) >> maxBit))
    maxBit -= 1

  // 对每一位进行比较
  for (let bit = 0; bit <= maxBit; ++bit) {
    let x = 0
    let y = 0
    for (let i = 0; i < len; ++i) {
      // 统计数值该位为 1 的数量
      if (nums[i] & (1 << bit)) x += 1
      // 统计下标该位为 1 的数量
      if (i & (1 << bit)) y += 1
    }
    if (x > y) ans |= 1 << bit
  }

  return ans
}
```

### 快慢指针

```ts
/**
 * 快慢指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicate4(nums: number[]): number {
  let slow = 0
  let fast = 0

  // 2(slow + fast) = slow + fast = kL
  // slow = kL - fast
  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)

  slow = 0

  // slow = (k - 1)L + (L - fast) = (k - 1)L + C
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
}
```

