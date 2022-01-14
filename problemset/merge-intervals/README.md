# 合并区间

> 难度：中等
>
> https://leetcode-cn.com/problems/merge-intervals/

## 题目

以数组 `intervals` 表示若干个区间的集合，其中单个区间为
`intervals[i] = [starti, endi]` 。请你合并所有重叠的区间，并返回一个不重叠的区间
数组，该数组需恰好覆盖输入中的所有区间。

### 示例

#### 示例 1

```
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

#### 示例 2：

```
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

## 解题

```typescript
/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param intervals
 */
export function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  // 排序
  intervals.sort((a, b) => a[0] - b[0]);

  const ans: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    if (i === intervals.length - 1 || intervals[i + 1][0] > intervals[i][1]) {
      // 当到了最后一个或者当下一个的左边界大于这个的右边界时
      ans.push(intervals[i]);
    } else {
      // 合并
      intervals[i + 1] = [
        intervals[i][0],
        Math.max(intervals[i][1], intervals[i + 1][1])
      ];
    }
  }

  return ans;
}
```
