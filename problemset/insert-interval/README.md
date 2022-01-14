# 插入区间

> 难度：中等
>
> https://leetcode-cn.com/problems/insert-interval/

## 题目

给你一个 **无重叠的** ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话
，可以合并区间）。

### 示例

#### 示例 1：

```
输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
```

#### 示例 2：

```
输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
```

#### 示例 3：

```
输入：intervals = [], newInterval = [5,7]
输出：[[5,7]]
```

#### 示例 4：

```
输入：intervals = [[1,5]], newInterval = [2,3]
输出：[[1,5]]
```

#### 示例 5：

```
输入：intervals = [[1,5]], newInterval = [2,7]
输出：[[1,7]]
```

## 解法

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param intervals
 * @param newInterval
 */
export function insert(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  if (!intervals.length) return [newInterval];

  const ans: number[][] = [];

  let i = 0;
  let isInsert = false; // 判断是否已经插入

  while (i < intervals.length) {
    if (intervals[i][1] < newInterval[0]) {
      // 当小于 newInterval 区间的直接插入，无需已经合并对比
      ans.push(intervals[i]);
    } else {
      // 将 newInterval 插入到 intervals
      if (!isInsert) {
        // 判断插入位置
        const spliceIndex = newInterval[0] < intervals[i][0] ? i : i + 1;
        intervals.splice(spliceIndex, 0, newInterval);
        isInsert = true;
      }

      // 对比合并
      const cur = intervals[i];
      const next = intervals[i + 1];
      if (next && cur[1] >= next[0]) {
        intervals[i + 1] = [cur[0], Math.max(cur[1], next[1])];
      } else {
        ans.push(intervals[i]);
      }
    }

    i++;
  }

  // 如果遍历完还未插入，则将 newInterval 放置最后即可
  if (!isInsert) ans.push(newInterval);

  return ans;
}
```
