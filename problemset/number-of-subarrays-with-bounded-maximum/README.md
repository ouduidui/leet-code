# 区间子数组个数

> 难度：中等
>
> https://leetcode.cn/problems/number-of-subarrays-with-bounded-maximum/

## 题目

给你一个整数数组 `nums` 和两个整数：`left` 及 `right` 。找出 `nums` 中连续、非空且其中最大元素在范围 `[left, right]` 内的子数组，并返回满足条件的子数组的个数。

生成的测试用例保证结果符合 `32-bit` 整数范围。

### 示例

#### 示例 1：

```
输入：nums = [2,1,4,3], left = 2, right = 3
输出：3
解释：满足条件的三个子数组：[2], [2, 1], [3]
```

#### 示例 2：

```
输入：nums = [2,9,2,5,6], left = 2, right = 8
输出：7
```

## 解题

```ts
/**
 * 一次遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 * @param left
 * @param right
 * @returns
 */
export function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
  let res = 0
  let last2 = -1
  let last1 = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= left && nums[i] <= right) {
      last1 = i
    }
    else if (nums[i] > right) {
      last2 = i
      last1 = -1
    }
    if (last1 !== -1)
      res += last1 - last2
  }
  return res
}
```