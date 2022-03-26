# 搜索旋转排序数组 II

> 难度：中等
>
> https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/

## 题目

已知存在一个按非降序排列的整数数组 **nums** ，数组中的值不必互不相同。

在传递给函数之前，`nums` 在预先未知的某个下标 `k（0 <= k < nums.length）`上进行
了 **旋转** ，使数组变为
`[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`（下标
从 0 开始计数）。例如， `[0,1,2,4,4,4,5,6,6,7]` 在下标 5 处经旋转后可能变为
`[4,5,6,6,7,0,1,2,4,4]` 。

给你 **旋转后** 的数组 `nums` 和一个整数 `target` ，请你编写一个函数来判断给定的
目标值是否存在于数组中。如果 `nums` 中存在这个目标值 `target` ，则返回 `true` ，
否则返回 `false` 。

### 示例

#### 示例 1：

```
输入：nums = [2,5,6,0,0,1,2], target = 0
输出：true
```

#### 示例 2：

```
输入：nums = [2,5,6,0,0,1,2], target = 3
输出：false
```

## 解题

```javascript
/**
 * 二分法
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums
 * @param target
 */
export function search(nums: number[], target: number): boolean {
  if (target === nums[0]) return true;

  // 判断target是在左边的递增序列还是在右边的递增序列
  const isRight = target < nums[0];
  let left = 0;
  let right = nums.length - 1;

  // 更新指针
  while (nums[left] >= nums[right] && left !== right) {
    isRight ? left++ : right--;
  }
  // 二分法
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return true;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
```
