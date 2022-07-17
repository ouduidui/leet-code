# 数组嵌套

> 难度：中等
>
> https://leetcode.cn/problems/array-nesting/

## 题目

索引从`0`开始长度为`N`的数组`A`，包含`0`到`N - 1`的所有整数。找到最大的集合`S`并返回其大小，其中 `S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }`且遵守以下的规则。

假设选择索引为`i`的元素`A[i]`为`S`的第一个元素，`S`的下一个元素应该是`A[A[i]]`，之后是`A[A[A[i]]]`... 以此类推，不断添加直到`S`出现重复的元素。

### 示例

```
输入: A = [5,4,0,3,1,6,2]
输出: 4
解释: 
A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

其中一种最长的 S[K]:
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
```

## 解题

### 图

```ts
/**
 * 图
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function arrayNesting(nums: number[]): number {
  let ans = 0
  const len = nums.length

  const vis: boolean[] = new Array(len).fill(false)
  for (let i = 0; i < len; i++) {
    let cnt = 0
    while (!vis[i]) {
      vis[i] = true
      i = nums[i]
      cnt++
    }
    ans = Math.max(ans, cnt)
  }

  return ans
}
```

### 原地标记

```ts
/**
 * 原地标记
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function arrayNesting2(nums: number[]): number {
  let ans = 0
  const len = nums.length

  for (let i = 0; i < len; i++) {
    let cnt = 0
    while (nums[i] < len) {
      const num = nums[i]
      nums[i] = len
      i = num
      cnt++
    }
    ans = Math.max(ans, cnt)
  }

  return ans
}
```