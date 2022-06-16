# 数组中的 k-diff 数对

> 难度：中等
>
> https://leetcode.cn/problems/k-diff-pairs-in-an-array/

## 题目

给定一个整数数组和一个整数 `k`，你需要在数组里找到 **不同的** `k-diff` 数对，并返回不同的 **`k-diff` 数对** 的数目。

这里将 `k-diff` 数对定义为一个整数对 `(nums[i], nums[j])`，并满足下述全部条件：

- `0 <= i < j < nums.length`
-` |nums[i] - nums[j]| == k`

注意，`|val|` 表示` val` 的绝对值。

### 示例

#### 示例 1：

```
输入：nums = [3, 1, 4, 1, 5], k = 2
输出：2
解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
尽管数组中有两个1，但我们只应返回不同的数对的数量。
```

#### 示例 2：

```
输入：nums = [1, 2, 3, 4, 5], k = 1
输出：4
解释：数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5)。
```

#### 示例 3：

```
输入：nums = [1, 3, 1, 5, 4], k = 0
输出：1
解释：数组中只有一个 0-diff 数对，(1, 1)。
```

## 解题

```ts 
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @param k
 * @returns
 */
export function findPairs(nums: number[], k: number): number {
  const res = new Set<number>()
  const visited = new Set<number>()

  for (const num of nums) {
    if (visited.has(num - k))
      res.add(num - k)
    if (visited.has(num + k))
      res.add(num)

    visited.add(num)
  }

  return res.size
}
```