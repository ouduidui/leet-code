# 按要求补齐数组

> 难度：困难
>
> https://leetcode-cn.com/problems/patching-array/

## 题目

给定一个已排序的正整数数组 `nums` ，和一个正整数 `n` 。从 `[1, n]` 区间内选取任意个数字补充到 `nums` 中，使得 `[1, n]` 区间内的任何数字都可以用 `nums` 中某几个数字的和来表示。

请返回 **满足上述要求的最少需要补充的数字个数** 。

### 示例

#### 示例 1:

```
输入: nums = [1,3], n = 6
输出: 1 
解释:
根据 nums 里现有的组合 [1], [3], [1,3]，可以得出 1, 3, 4。
现在如果我们将 2 添加到 nums 中， 组合变为: [1], [2], [3], [1,3], [2,3], [1,2,3]。
其和可以表示数字 1, 2, 3, 4, 5, 6，能够覆盖 [1, 6] 区间里所有的数。
所以我们最少需要添加一个数字。
```

#### 示例 2:

```
输入: nums = [1,5,10], n = 20
输出: 2
解释: 我们需要添加 [2,4]。
```

#### 示例 3:

```
输入: nums = [1,2,2], n = 5
输出: 0
```

## 解题

对于正整数 `x`，如果区间 `[1, x-1]` 内的所有数字都已经被覆盖，且`x`在数组中，则区间`[1, 2x-1]` 内的所有数字也都被覆盖。证明如下：

> 对于任意 `1 ≤ y < x`，`y`已经被覆盖，`x` 在数组中，因此 `y+x` 也被覆盖，区间 `[x+1, 2x - 1]`（即区间 `[1, x-1]` 内每个数字加上 `x`等到之后的区间）内的所有的数字也被覆盖，由此可得区间`[1, 2x-1]`内的所有数字都被覆盖。

```ts
/**
 * 贪心
 * @desc 时间复杂度 O(M + logN)  空间复杂度 O(1)
 * @param nums
 * @param n
 * @returns
 */
export function minPatches(nums: number[], n: number): number {
  let patches = 0
  let target = 1
  const len = nums.length
  let i = 0
  while (target <= n) {
    // 如果 i 在 nums 下标范围内且 nums[i] 小于等于 target，则将该值加给target，并将 i 加一
    if (i < len && nums[i] <= target) {
      target += nums[i++]
    }
    // 否则，则代表target没有被覆盖，因此需要在数组中补充target，然后将target乘以 2
    else {
      target *= 2
      patches++
    }
  }

  return patches
}
```