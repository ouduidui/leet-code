# 搜索插入位置

> 难度：简单
>
> https://leetcode-cn.com/problems/search-insert-position/

## 题目

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在
于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 `O(log n)` 的算法。

### 示例

#### 示例 1:

```
输入: nums = [1,3,5,6], target = 5
输出: 2
```

#### 示例 2:

```
输入: nums = [1,3,5,6], target = 2
输出: 1
```

#### 示例 3:

```
输入: nums = [1,3,5,6], target = 7
输出: 4
```

#### 示例 4:

```
输入: nums = [1,3,5,6], target = 0
输出: 0
```

#### 示例 5:

```
输入: nums = [1], target = 0
输出: 0
```

## 解法

```typescript
/**
 * 二分法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param nums
 * @param target
 */
export function searchInsert(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  let ans: number = nums.length;

  while (left <= right) {
    const mid: number = ((right - left) >> 1) + left;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}
```
