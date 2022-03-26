# 增量元素之间的最大差值

> 难度：简单
>
> https://leetcode-cn.com/problems/maximum-difference-between-increasing-elements/

## 题目

给你一个下标从 `0` 开始的整数数组 `nums` ，该数组的大小为 `n` ，请你计算
`nums[j] - nums[i]` 能求得的 **最大差值** ，其中 `0 <= i < j < n` 且
`nums[i] < nums[j]` 。

返回 **最大差值** 。如果不存在满足要求的 `i` 和 `j` ，返回 `-1` 。

### 示例

#### 示例 1：

```
输入：nums = [7,1,5,4]
输出：4
解释：
最大差值出现在 i = 1 且 j = 2 时，nums[j] - nums[i] = 5 - 1 = 4 。
注意，尽管 i = 1 且 j = 0 时 ，nums[j] - nums[i] = 7 - 1 = 6 > 4 ，但 i > j 不满足题面要求，所以 6 不是有效的答案。
```

#### 示例 2：

```
输入：nums = [9,4,3,2]
输出：-1
解释：
不存在同时满足 i < j 和 nums[i] < nums[j] 这两个条件的 i, j 组合。
```

#### 示例 3：

```
输入：nums = [1,5,2,10]
输出：9
解释：
最大差值出现在 i = 0 且 j = 3 时，nums[j] - nums[i] = 10 - 1 = 9 。
```

## 解题

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 */
export function maximumDifference(nums: number[]): number {
  let result = -1;

  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] < nums[j]) {
        result = Math.max(result, nums[j] - nums[i]);
      }
    }
  }

  return result;
}
```

### 前缀最小值

```typescript
/**
 * 前缀最小值
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 */
export function maximumDifference2(nums: number[]): number {
  let result = -1;
  let prevMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > prevMin) {
      result = Math.max(result, nums[i] - prevMin);
    } else {
      prevMin = nums[i];
    }
  }

  return result;
}
```
