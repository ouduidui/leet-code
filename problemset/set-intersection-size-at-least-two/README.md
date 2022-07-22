# 设置交集大小至少为2

> 难度：困难
>
> https://leetcode.cn/problems/set-intersection-size-at-least-two/

## 题目

一个整数区间 `[a, b]  ( a < b )` 代表着从 `a` 到 `b` 的所有连续整数，包括 `a` 和 `b`。

给你一组整数区间`intervals`，请找到一个最小的集合 `S`，使得 `S` 里的元素与区间`intervals`中的每一个整数区间都至少有`2`个元素相交。

输出这个最小集合`S`的大小。

#### 示例 1:

```
输入: intervals = [[1, 3], [1, 4], [2, 5], [3, 5]]
输出: 3
解释:
考虑集合 S = {2, 3, 4}. S与intervals中的四个区间都有至少2个相交的元素。
且这是S最小的情况，故我们输出3。
```

#### 示例 2:

```
输入: intervals = [[1, 2], [2, 3], [2, 4], [4, 5]]
输出: 5
解释:
最小的集合S = {1, 2, 3, 4, 5}.
```

## 解题 

```ts 
/**
 * 贪心算法
 * @desc 时间复杂度 O(NlogN + NM)  空间复杂度 O(NM)
 * @param intervals
 * @returns
 */
export function intersectionSizeTwo(intervals: number[][]): number {
  const len = intervals.length
  let res = 0
  const m = 2

  intervals.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1]
    return a[0] - b[0]
  })
  const temp = new Array(len).fill([]).map(() => [])

  for (let i = len - 1; i >= 0; i--) {
    for (let j = intervals[i][0], k = temp[i].length; k < m; j++, k++) {
      res++
      helper(intervals, temp, i - 1, j)
    }
  }

  return res

  function helper(internals: number[][], temp: number[][], pos: number, num: number) {
    for (let i = pos; i >= 0; i--) {
      if (internals[i][1] < num) break
      temp[i].push(num)
    }
  }
}
```