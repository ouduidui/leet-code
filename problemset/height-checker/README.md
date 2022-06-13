# 高度检查器

> 难度：简单
>
> https://leetcode.cn/problems/height-checker/

## 题目

学校打算为全体学生拍一张年度纪念照。根据要求，学生需要按照 **非递减** 的高度顺序排成一行。

排序后的高度情况用整数数组 `expected` 表示，其中 `expected[i]` 是预计排在这一行中第 `i` 位的学生的高度（下标从 `0` 开始）。

给你一个整数数组 `heights` ，表示 **当前学生站位** 的高度情况。`heights[i]` 是这一行中第 `i` 位学生的高度（下标从 `0` 开始）。

返回满足` heights[i] != expected[i]` 的 **下标数量** 。

### 示例

#### 示例 1：

```
输入：heights = [1,1,4,2,1,3]
输出：3 
解释：
高度：[1,1,4,2,1,3]
预期：[1,1,1,2,3,4]
下标 2 、4 、5 处的学生高度不匹配。
```

#### 示例 2：

```
输入：heights = [5,1,2,3,4]
输出：5
解释：
高度：[5,1,2,3,4]
预期：[1,2,3,4,5]
所有下标的对应学生高度都不匹配。
```

#### 示例 3：

```
输入：heights = [1,2,3,4,5]
输出：0
解释：
高度：[1,2,3,4,5]
预期：[1,2,3,4,5]
所有下标的对应学生高度都匹配。
```

## 解题 

### 基于比较的排序

```ts 
/**
 * 基于比较的排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param heights
 * @returns
 */
export function heightChecker(heights: number[]): number {
  const sorted = [...heights].sort((a, b) => a - b)
  let ans = 0
  for (let i = 0; i < heights.length; i++)
    if (sorted[i] !== heights[i]) ans++

  return ans
}
```

```ts 
/**
 * 计数排序
 * @desc 时间复杂度 O(N+C)  空间复杂度 O(C)
 * @param heights
 * @returns
 */
export function heightChecker2(heights: number[]): number {
  const max = Math.max(...heights)
  const cnt = new Array(max + 1).fill(0)
  for (const h of heights)
    cnt[h]++

  let idx = 0
  let ans = 0
  for (let i = 1; i <= max; i++) {
    for (let j = 1; j <= cnt[i]; j++) {
      if (heights[idx] !== i)
        ans++

      idx++
    }
  }
  return ans
}
```