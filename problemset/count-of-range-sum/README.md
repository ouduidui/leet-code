# 区间和的个数

> 难度：困难
>
> https://leetcode-cn.com/problems/count-of-range-sum/

## 题目

给你一个整数数组 `nums` 以及两个整数 `lower` 和 `upper` 。求数组中，值位于范围 `[lower, upper]` （包含 `lower` 和 `upper`）之内的 **区间和的个数** 。

**区间和** `S(i, j)` 表示在 `nums` 中，位置从 `i` 到 `j` 的元素之和，包含 `i` 和 `j` `(i ≤ j)`。

 
### 示例 

#### 示例 1：

```
输入：nums = [-2,5,-1], lower = -2, upper = 2
输出：3
解释：存在三个区间：[0,0]、[2,2] 和 [0,2] ，对应的区间和分别是：-2 、-1 、2 。
```

#### 示例 2：

```
输入：nums = [0], lower = 0, upper = 0
输出：1
```

## 解题

### 暴力解法

```ts 
/**
 * 暴力解法
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param nums
 * @param lower
 * @param upper
 * @returns
 */
export function countRangeSum(nums: number[], lower: number, upper: number): number {
  const len = nums.length
  let res = 0

  for (let i = 0; i < len; i++) {
    let sum = 0
    for (let j = i; j < len; j++) {
      sum += nums[j]
      if (sum >= lower && sum <= upper) res++
    }
  }

  return res
}
```

### 归并排序

```ts 
/**
 * 归并排序
 * @desc 时间复杂度 O(N²)  空间复杂度 O(1)
 * @param nums
 * @param lower
 * @param upper
 * @returns
 */
export function countRangeSum2(nums: number[], lower: number, upper: number): number {
  let s = 0
  const sum = [0]
  for (const val of nums)
    sum.push(s += val)

  return countRangeSumRecursive(sum, lower, upper, 0, sum.length - 1)

  function countRangeSumRecursive(
    sum: number[],
    lower: number,
    upper: number,
    left: number,
    right: number,
  ): number {
    if (left === right) return 0

    const mid = (left + right) >> 1
    const n1 = countRangeSumRecursive(sum, lower, upper, left, mid)
    const n2 = countRangeSumRecursive(sum, lower, upper, mid + 1, right)
    let res = n1 + n2

    // 统计下标对的数量
    let i = left
    let l = mid + 1
    let r = mid + 1

    while (i <= mid) {
      while (l <= right && sum[l] - sum[i] < lower) l++
      while (r <= right && sum[r] - sum[i] <= upper) r++

      res += (r - l)
      i++
    }

    // 合并两个排序数组
    const sorted: number[] = []
    let p1 = left
    let p2 = mid + 1
    let p = 0
    while (p1 <= mid || p2 <= right) {
      if (p1 > mid) {
        sorted[p++] = sum[p2++]
      }
      else if (p2 > right) {
        sorted[p++] = sum[p1++]
      }
      else {
        if (sum[p1] < sum[p2])
          sorted[p++] = sum[p1++]
        else
          sorted[p++] = sum[p2++]
      }
    }
    for (let i = 0; i < sorted.length; i++)
      sum[left + i] = sorted[i]

    return res
  }
}
```