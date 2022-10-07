# 最大升序子数组和

> 难度：简单
>
> https://leetcode.cn/problems/maximum-ascending-subarray-sum/

## 题目

给你一个正整数组成的数组 `nums` ，返回 `nums` 中一个 **升序** 子数组的最大可能元素和。

子数组是数组中的一个连续数字序列。

已知子数组 `[numsl, numsl+1, ..., numsr-1, numsr] `，若对所有 `i（l <= i < r）`，`numsi < numsi+1` 都成立，则称这一子数组为 **升序** 子数组。注意，大小为 `1` 的子数组也视作 **升序** 子数组。

### 示例

#### 示例 1：

```
输入：nums = [10,20,30,5,10,50]
输出：65
解释：[5,10,50] 是元素和最大的升序子数组，最大元素和为 65 。
```

#### 示例 2：

```
输入：nums = [10,20,30,40,50]
输出：150
解释：[10,20,30,40,50] 是元素和最大的升序子数组，最大元素和为 150 。
```

#### 示例 3：

```
输入：nums = [12,17,15,13,10,11,12]
输出：33
解释：[10,11,12] 是元素和最大的升序子数组，最大元素和为 33 。
```

#### 示例 4：

```
输入：nums = [100,10,1]
输出：100
```

## 解题

```ts 
/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function maxAscendingSum(nums: number[]): number {
  let res = 0
  let l = 0
  while (l < nums.length) {
    let cursum = nums[l++]
    while (l < nums.length && nums[l] > nums[l - 1])
      cursum += nums[l++]

    res = Math.max(res, cursum)
  }
  return res
}
```