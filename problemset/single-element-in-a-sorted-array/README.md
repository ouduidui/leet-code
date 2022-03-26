# 有序数组中的单一元素

> 难度：中等
>
> https://leetcode-cn.com/problems/single-element-in-a-sorted-array/

## 题目

给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次
。

请你找出并返回只出现一次的那个数。

你设计的解决方案必须满足 `O(log n)` 时间复杂度和 `O(1)` 空间复杂度。

## 示例

#### 示例 1:

```
输入: nums = [1,1,2,3,3,4,4,8,8]
输出: 2
```

#### 示例 2:

```
输入: nums =  [3,3,7,7,10,11,11]
输出: 10
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function singleNonDuplicate(nums: number[]): number {
  let i = 0;
  const len = nums.length;

  while (i < len) {
    if (nums[i] === nums[i + 1]) {
      i = i + 2;
      continue;
    }
    return nums[i];
  }

  return NaN;
}
```

### 全数组的二分查找

```typescript
/**
 * 全数组的二分查找
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param nums
 */
export function singleNonDuplicate2(nums: number[]): number {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const mid = (high + low) >> 1;
    // 当 mid 是偶数时，mid + 1 = mid ⊕ 1
    // 当 mid 是奇数时，mid - 1 = mid ⊕ 1
    if (nums[mid] === nums[mid ^ 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return nums[low];
}
```

### 偶数下标的二分查找

```typescript
/**
 * 偶数下标的二分查找
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param nums
 */
export function singleNonDuplicate3(nums: number[]): number {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = (high + low) >> 1;
    // 确保 mid 为偶数
    // 当 mid 是偶数时，mid & 1 = 0
    // 当 mid 是奇数时，mid & 1 = 1
    mid -= mid & 1;
    if (nums[mid] === nums[mid + 1]) {
      low = mid + 2;
    } else {
      high = mid;
    }
  }

  return nums[low];
}
```
