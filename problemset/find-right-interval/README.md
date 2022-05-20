# 寻找右区间

> 难度：中等
>
> https://leetcode.cn/problems/find-right-interval/

## 题目

给你一个区间数组 `intervals` ，其中 `intervals[i] = [starti, endi]` ，且每个 `starti` 都 **不同** 。

区间 `i` 的 **右侧区间** 可以记作区间 `j` ，并满足 `startj >= endi` ，且 `startj` 最小化 。

返回一个由每个区间 `i` 的 **右侧区间** 的最小起始位置组成的数组。如果某个区间 `i` 不存在对应的 **右侧区间** ，则下标 `i` 处的值设为 `-1` 。

### 示例

#### 示例 1：

```
输入：intervals = [[1,2]]
输出：[-1]
解释：集合中只有一个区间，所以输出-1。
```

#### 示例 2：

```
输入：intervals = [[3,4],[2,3],[1,2]]
输出：[-1,0,1]
解释：对于 [3,4] ，没有满足条件的“右侧”区间。
对于 [2,3] ，区间[3,4]具有最小的“右”起点;
对于 [1,2] ，区间[2,3]具有最小的“右”起点。
```

#### 示例 3：

```
输入：intervals = [[1,4],[2,3],[3,4]]
输出：[-1,2,-1]
解释：对于区间 [1,4] 和 [3,4] ，没有满足条件的“右侧”区间。
对于 [2,3] ，区间 [3,4] 有最小的“右”起点。
```

## 解题

### 二分法

```ts 
/**
 * 二分法
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param intervals
 * @returns
 */
export function findRightInterval(intervals: number[][]): number[] {
  const len = intervals.length
  if (len <= 1) return [-1]

  const startIntervals: [startNum: number, index: number][]
  = new Array(len).fill([]).map(() => [0, 0])

  for (let i = 0; i < len; i++) {
    startIntervals[i][0] = intervals[i][0]
    startIntervals[i][1] = i
  }

  startIntervals.sort((a, b) => a[0] - b[0])

  const ans: number[] = []

  for (let i = 0; i < len; i++) {
    let left = 0
    let right = len - 1
    let target = -1

    while (left <= right) {
      const mid = (left + right) >> 1
      if (startIntervals[mid][0] >= intervals[i][1]) {
        target = startIntervals[mid][1]
        right = mid - 1
      }
      else {
        left = mid + 1
      }
    }
    ans[i] = target
  }

  return ans
}
```

### 双指针

```ts 
/**
 * 双指针
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param intervals
 * @returns
 */
export function findRightInterval2(intervals: number[][]): number[] {
  const len = intervals.length
  if (len <= 1) return [-1]

  const startIntervals: [startNum: number, index: number][]
  = new Array(len).fill([]).map(() => [0, 0])
  const endIntervals: [endNum: number, index: number][]
  = new Array(len).fill([]).map(() => [0, 0])

  for (let i = 0; i < len; i++) {
    startIntervals[i][0] = intervals[i][0]
    startIntervals[i][1] = i
    endIntervals[i][0] = intervals[i][1]
    endIntervals[i][1] = i
  }

  startIntervals.sort((a, b) => a[0] - b[0])
  endIntervals.sort((a, b) => a[0] - b[0])

  const ans: number[] = []

  for (let i = 0, j = 0; i < len; i++) {
    while (j < len && endIntervals[i][0] > startIntervals[j][0]) j++
    ans[endIntervals[i][1]] = j < len ? startIntervals[j][1] : -1
  }

  return ans
}
```