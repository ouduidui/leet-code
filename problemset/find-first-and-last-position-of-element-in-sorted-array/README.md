# 在排序数组中查找元素的第一个和最后一个位置

> 难度：中等
>
> https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

## 题目

给定一个按照升序排列的整数数组 `nums`，和一个目标值 `target`。找出给定目标值在数
组中的开始位置和结束位置。

如果数组中不存在目标值 `target`，返回 `[-1, -1]`。

### 示例

#### 示例 1：

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

#### 示例 2：

```
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

#### 示例 3：

```
输入：nums = [], target = 0
输出：[-1,-1]
```

## 解法

```typescript
/**
 * 二分法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param nums
 * @param target
 */
export function searchRange(nums: number[], target: number): number[] {
  let ans: [number, number] = [-1, -1];
  if (!nums.length) return ans;
  if (nums.length === 1 && nums[0] !== target) return ans;

  const leftIndex = binarySearch(true);
  const rightIndex = binarySearch(false) - 1;

  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    ans = [leftIndex, rightIndex];
  }

  return ans;

  function binarySearch(lower: boolean): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    let ans = nums.length;

    while (left <= right) {
      const mid: number = (left + right) >> 1;
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1;
        ans = mid;
      } else {
        left = mid + 1;
      }
    }

    return ans;
  }
}
```
