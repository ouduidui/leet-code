# 寻找峰值

> 难度：中等
>
> https://leetcode-cn.com/problems/find-peak-element/

## 题目

峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组  `nums`，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种
情况下，返回 **任何一个峰值** 所在位置即可。

你可以假设  `nums[-1] = nums[n] = -∞ `。

你必须实现时间复杂度为 `O(log n)` 的算法来解决此问题。

### 示例

#### 示例 1：

```
输入：nums = [1,2,3,1]
输出：2
解释：3 是峰值元素，你的函数应该返回其索引 2。
```

#### 示例  2：

```
输入：nums = [1,2,1,3,5,6,4]
输出：1 或 5
解释：你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
```

## 解法

### 找到最大值

```typescript
/**
 * 找到最大值
 * desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function findPeakElement(nums: number[]): number {
  let idx = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[idx]) {
      idx = i;
    }
  }

  return idx;
}
```

### 迭代爬坡

```typescript
/**
 * 迭代爬坡
 * desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function findPeakElement2(nums: number[]): number {
  const len = nums.length;
  let idx = (Math.random() * len) >> 0; // 从随机点出发

  // 如果不是在峰值，进行行走
  while (!(compare(idx - 1, idx) < 0 && compare(idx, idx + 1) > 0)) {
    idx =
      compare(idx, idx + 1) < 0 ? idx + 1 /* 向右走 */ : idx - 1 /* 向左走 */;
  }

  return idx;

  // 比较两个点大小
  function compare(i: number, j: number): -1 | 0 | 1 {
    const num1 = get(i);
    const num2 = get(j);
    if (num1 === num2) return 0;
    return num1 > num2 ? 1 : -1;
  }

  // 取值，考虑边缘情况
  function get(i: number): number {
    return i === -1 || i === len ? -Infinity : nums[i];
  }
}
```

### 二分查找

```typescript
/**
 * 二分查找
 * desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param nums
 */
export function findPeakElement3(nums: number[]): number {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  let ans = -1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (compare(mid - 1, mid) < 0 && compare(mid, mid + 1) > 0) {
      ans = mid;
      break;
    }
    if (compare(mid, mid + 1) < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;

  // 比较两个点大小
  function compare(i: number, j: number): -1 | 0 | 1 {
    const num1 = get(i);
    const num2 = get(j);
    if (num1 === num2) return 0;
    return num1 > num2 ? 1 : -1;
  }

  // 取值，考虑边缘情况
  function get(i: number): number {
    return i === -1 || i === len ? -Infinity : nums[i];
  }
}
```
