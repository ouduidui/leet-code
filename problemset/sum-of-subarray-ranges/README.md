# 子数组范围和

> 难度：中等
>
> https://leetcode-cn.com/problems/sum-of-subarray-ranges/

## 题目

给你一个整数数组 `nums` 。`nums` 中，子数组的 **范围** 是子数组中最大元素和最小
元素的差值。

返回 `nums` 中 **所有** 子数组范围的 **和** 。

子数组是数组中一个连续 **非空** 的元素序列。

### 示例

#### 示例 1：

```
输入：nums = [1,2,3]
输出：4
解释：nums 的 6 个子数组如下所示：
[1]，范围 = 最大 - 最小 = 1 - 1 = 0
[2]，范围 = 2 - 2 = 0
[3]，范围 = 3 - 3 = 0
[1,2]，范围 = 2 - 1 = 1
[2,3]，范围 = 3 - 2 = 1
[1,2,3]，范围 = 3 - 1 = 2
所有范围的和是 0 + 0 + 0 + 1 + 1 + 2 = 4
```

#### 示例 2：

```
输入：nums = [1,3,3]
输出：4
解释：nums 的 6 个子数组如下所示：
[1]，范围 = 最大 - 最小 = 1 - 1 = 0
[3]，范围 = 3 - 3 = 0
[3]，范围 = 3 - 3 = 0
[1,3]，范围 = 3 - 1 = 2
[3,3]，范围 = 3 - 3 = 0
[1,3,3]，范围 = 3 - 1 = 2
所有范围的和是 0 + 0 + 0 + 2 + 0 + 2 = 4
```

#### 示例 3：

```
输入：nums = [4,-2,-3,4,1]
输出：59
解释：nums 中所有子数组范围的和是 59
```

## 解法

### 遍历

```typescript
/**
 * 遍历
 * @desc 时间复杂度 O(N^1)  空间复杂度 O(1)
 * @param nums
 */
export function subArrayRanges(nums: number[]): number {
  const len = nums.length;
  if (len === 1) return 0;

  let result = 0;

  for (let i = 0; i < len; i++) {
    let max = nums[i];
    let min = nums[i];
    for (let j = i + 1; j < len; j++) {
      max = Math.max(max, nums[j]);
      min = Math.min(min, nums[j]);
      result += max - min;
    }
  }

  return result;
}
```

### 单调栈

```typescript
/**
 * 单调栈
 * @desc 时间复杂度 O(N^1)  空间复杂度 O(1)
 * @param nums
 */
export function subArrayRanges2(nums: number[]): number {
  const len = nums.length;
  if (len === 1) return 0;

  const minLeft = new Array(len).fill(0);
  const minRight = new Array(len).fill(0);
  const maxLeft = new Array(len).fill(0);
  const maxRight = new Array(len).fill(0);
  const minStack: number[] = [];
  const maxStack: number[] = [];

  // 从左到右遍历，找到[0, i]区间的最大值和最小值
  for (let i = 0; i < len; i++) {
    while (minStack.length && nums[minStack[minStack.length - 1]] > nums[i]) {
      minStack.pop();
    }
    minLeft[i] = minStack.length ? minStack[minStack.length - 1] : -1;
    minStack.push(i);

    while (maxStack.length && nums[maxStack[maxStack.length - 1]] <= nums[i]) {
      maxStack.pop();
    }
    maxLeft[i] = maxStack.length === 0 ? -1 : maxStack[maxStack.length - 1];
    maxStack.push(i);
  }

  // 清空栈
  minStack.length = 0;
  maxStack.length = 0;

  // 从右到左遍历，找到[i, len - 1]区间的最大值和最小值
  for (let i = len - 1; i >= 0; i--) {
    while (minStack.length && nums[minStack[minStack.length - 1]] >= nums[i]) {
      minStack.pop();
    }
    minRight[i] = minStack.length === 0 ? len : minStack[minStack.length - 1];
    minStack.push(i);

    while (maxStack.length && nums[maxStack[maxStack.length - 1]] < nums[i]) {
      maxStack.pop();
    }
    maxRight[i] = maxStack.length === 0 ? len : maxStack[maxStack.length - 1];
    maxStack.push(i);
  }

  let sumMax = 0; // 所有子数组的最大值之和
  let sumMin = 0; // 所以子数组的最小值之和
  for (let i = 0; i < len; i++) {
    sumMax += (maxRight[i] - i) * (i - maxLeft[i]) * nums[i];
    sumMin += (minRight[i] - i) * (i - minLeft[i]) * nums[i];
  }
  return sumMax - sumMin;
}
```
