# 找出第 K 小的数对距离

> 难度：困难
>
> https://leetcode.cn/problems/find-k-th-smallest-pair-distance/

## 题目

数对 `(a,b)` 由整数 `a` 和 `b` 组成，其数对距离定义为 `a` 和 `b` 的绝对差值。

给你一个整数数组 `nums` 和一个整数 `k` ，数对由 `nums[i]` 和 `nums[j]` 组成且满足` 0 <= i < j < nums.length` 。返回 **所有数对距离中** 第 `k` 小的数对距离。

### 示例

#### 示例 1：

```
输入：nums = [1,3,1], k = 1
输出：0
解释：数对和对应的距离如下：
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
距离第 1 小的数对是 (1,1) ，距离为 0 。
```

#### 示例 2：

```
输入：nums = [1,1,1], k = 2
输出：0
```

#### 示例 3：

```
输入：nums = [1,6,1], k = 3
输出：5
```

## 解题

###  排序 + 二分查找

```ts 
/**
 * 排序 + 二分查找
 * @desc 时间复杂度 O(NlogN+logD) 空间复杂度 O(logN)
 * @param nums
 * @param k
 * @returns
 */
export function smallestDistancePair(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  const len = nums.length
  let left = 0
  let right = nums[len - 1] - nums[0]

  while (left < right) {
    const mid = (left + right) >> 1
    let cnt = 0
    for (let i = 0; i < len; i++) {
      const j = binarySearch(nums, i, nums[i] - mid)
      cnt += i - j
    }

    if (cnt >= k)
      right = mid - 1
    else
      left = mid + 1
  }
}
```

### 排序 + 二分查找 + 双指针

```ts 
/**
 * 排序 + 二分查找 + 双指针
 * @desc 时间复杂度 O(N(logN+logD)) 空间复杂度 O(logN)
 * @param nums
 * @param k
 * @returns
 */
export function smallestDistancePair2(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  const len = nums.length
  let left = 0
  let right = nums[len - 1] - nums[0]

  while (left <= right) {
    const mid = (left + right) >> 1
    let cnt = 0
    for (let i = 0, j = 0; j < len; j++) {
      while (nums[j] - nums[i] > mid)
        i++

      cnt += j - i
    }

    if (cnt >= k)
      right = mid - 1
    else
      left = mid + 1
  }
  return left
}
```