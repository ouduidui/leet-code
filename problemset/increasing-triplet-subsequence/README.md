# 递增的三元子序列

> 难度：中等
>
> https://leetcode.cn/problems/increasing-triplet-subsequence/

## 题目

给你一个整数数组 `nums` ，判断这个数组中是否存在长度为 `3` 的递增子序列。

如果存在这样的三元组下标` (i, j, k)` 且满足 `i < j < k` ，使得 `nums[i] < nums[j] < nums[k]` ，返回 `true` ；否则，返回 `false` 。
 
### 示例

#### 示例 1：

```
输入：nums = [1,2,3,4,5]
输出：true
解释：任何 i < j < k 的三元组都满足题意
```

#### 示例 2：

```
输入：nums = [5,4,3,2,1]
输出：false
解释：不存在满足题意的三元组
```

#### 示例 3：

```
输入：nums = [2,1,5,0,4,6]
输出：true
解释：三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6
```

## 解题

```ts 
/**
 * 贪心算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function increasingTriplet(nums: number[]): boolean {
  const len = nums.length
  if (len < 3) return false

  let first = nums[0]
  let second = Number.MAX_VALUE
  for (let i = 0; i < len; i++) {
    const num = nums[i]
    if (num > second)
      return true
    else if (num > first)
      second = num
    else
      first = num
  }
  return false
}
```