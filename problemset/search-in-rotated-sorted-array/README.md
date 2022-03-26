# 搜索旋转排序数组

> 难度：中等
>
> https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

## 题目

整数数组 nums 按升序排列，数组中的值 **互不相同** 。

在传递给函数之前，`nums` 在预先未知的某个下标 `k（0 <= k < nums.length）`上进行
了 旋转，使数组变为
`[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`（下标从
0 开始 计数）。例如， `[0,1,2,4,5,6,7]` 在下标 3 处经旋转后可能变
为`[4,5,6,7,0,1,2]` 。

给你 **旋转后** 的数组 `nums` 和一个整数 `target` ，如果 `nums` 中存在这个目标值
`target` ，则返回它的下标，否则返回`-1`。

### 示例

#### 示例 1：

```
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
```

#### 示例 2：

```
输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
```

#### 示例 3：

```
输入：nums = [1], target = 0
输出：-1
```

## 解题

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @return {number}
 */
export function search(nums: number[], target: number): number {
  return nums.indexOf(target);
}
```

### 二分法

```typescript
/**
 * 二分法
 * @desc 时间复杂度 O(logN)   空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @return {number}
 */
export function search2(nums: number[], target: number): number {
  const len = nums.length;

  if (!len) return -1;
  if (len === 1) return nums[0] === target ? 0 : -1;

  let left: number = 0;
  let right: number = len - 1;
  while (left <= right) {
    const mid: number = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[0] <= nums[mid]) {
      // 左边部分有序
      if (nums[0] <= target && target < nums[mid]) {
        // target在左边的区间内
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 右边部分有序
      if (nums[mid] < target && target <= nums[len - 1]) {
        // target在右边的区间内
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
```
