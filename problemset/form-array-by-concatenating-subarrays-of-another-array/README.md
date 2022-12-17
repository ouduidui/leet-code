# 通过连接另一个数组的子数组得到一个数组

> 难度：中等
>
> https://leetcode.cn/problems/form-array-by-concatenating-subarrays-of-another-array/

## 题目

给你一个长度为 `n` 的二维整数数组 `groups` ，同时给你一个整数数组 `nums` 。

你是否可以从 `nums` 中选出 `n` 个 **不相交** 的子数组，使得第 `i` 个子数组与 `groups[i]` （下标从 0 开始）完全相同，且如果 `i > 0` ，那么第 `(i-1)` 个子数组在 `nums` 中出现的位置在第 `i` 个子数组前面。（也就是说，这些子数组在 `nums` 中出现的顺序需要与 `groups` 顺序相同）

如果你可以找出这样的 `n` 个子数组，请你返回 `true` ，否则返回 `false` 。

如果不存在下标为 `k` 的元素 `nums[k]` 属于不止一个子数组，就称这些子数组是 ### 示例 的。子数组指的是原数组中连续元素组成的一个序列。

### 示例

#### 示例 1：

```
输入：groups = [[1,-1,-1],[3,-2,0]], nums = [1,-1,0,1,-1,-1,3,-2,0]
输出：true
解释：你可以分别在 nums 中选出第 0 个子数组 [1,-1,0,1,-1,-1,3,-2,0] 和第 1 个子数组 [1,-1,0,1,-1,-1,3,-2,0] 。
这两个子数组是不相交的，因为它们没有任何共同的元素。
```

#### 示例 2：

```
输入：groups = [[10,-2],[1,2,3,4]], nums = [1,2,3,4,10,-2]
输出：false
解释：选择子数组 [1,2,3,4,10,-2] 和 [1,2,3,4,10,-2] 是不正确的，因为它们出现的顺序与 groups 中顺序不同。
[10,-2] 必须出现在 [1,2,3,4] 之前。
```

#### 示例 3：

```
输入：groups = [[1,2,3],[3,4]], nums = [7,7,1,2,3,4,7,7]
输出：false
解释：选择子数组 [7,7,1,2,3,4,7,7] 和 [7,7,1,2,3,4,7,7] 是不正确的，因为它们不是不相交子数组。
它们有一个共同的元素 nums[4] （下标从 0 开始）。
```

## 解题

```ts 
/**
 * 贪心 + 双指针
 * @desc 时间复杂度 O(N * MAX(G(i))) 空间复杂度 O(1)
 * @param groups
 * @param nums
 * @returns
 */
export function canChoose(groups: number[][], nums: number[]): boolean {
  let i = 0
  for (let k = 0; k < nums.length && i < groups.length;) {
    if (check(groups[i], nums, k)) {
      k += groups[i].length
      i++
    }
    else {
      k++
    }
  }
  return i === groups.length

  function check(g: number[], nums: number[], k: number) {
    if (k + g.length > nums.length)
      return false

    for (let j = 0; j < g.length; j++) {
      if (g[j] !== nums[k + j])
        return false
    }
    return true
  }
}
```