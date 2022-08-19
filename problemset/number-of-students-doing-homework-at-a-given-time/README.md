# 在既定时间做作业的学生人数

> 难度：简单
>
> https://leetcode.cn/problems/number-of-students-doing-homework-at-a-given-time/

## 题目

给你两个整数数组 `startTime`（开始时间）和 `endTime`（结束时间），并指定一个整数 `queryTime` 作为查询时间。

已知，第 `i` 名学生在 `startTime[i]` 时开始写作业并于 `endTime[i]` 时完成作业。

请返回在查询时间 `queryTime` 时正在做作业的学生人数。形式上，返回能够使 `queryTime` 处于区间 `[startTime[i], endTime[i]]`（含）的学生人数。

### 示例

#### 示例 1：

```
输入：startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
输出：1
解释：一共有 3 名学生。
第一名学生在时间 1 开始写作业，并于时间 3 完成作业，在时间 4 没有处于做作业的状态。
第二名学生在时间 2 开始写作业，并于时间 2 完成作业，在时间 4 没有处于做作业的状态。
第三名学生在时间 3 开始写作业，预计于时间 7 完成作业，这是是唯一一名在时间 4 时正在做作业的学生。
```

#### 示例 2：

```
输入：startTime = [4], endTime = [4], queryTime = 4
输出：1
解释：在查询时间只有一名学生在做作业。
```

#### 示例 3：

```
输入：startTime = [4], endTime = [4], queryTime = 5
输出：0
```

#### 示例 4：

```
输入：startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7
输出：0
```

#### 示例 5：

```
输入：startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5
输出：5
```

## 解题

### 枚举

```ts 
/**
 * 枚举
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param startTime
 * @param endTime
 * @param queryTime
 * @returns
 */
export function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  const n = startTime.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime)
      ans++
  }
  return ans
}
```

### 差分数组

```ts 
/**
 * 差分数组
 * @desc 时间复杂度 O(N+queryTime)  空间复杂度 O(max(endTime))
 * @param startTime
 * @param endTime
 * @param queryTime
 * @returns
 */
export function busyStudent2(startTime: number[], endTime: number[], queryTime: number): number {
  const n = startTime.length
  const maxEndTime = Math.max(...endTime)
  if (queryTime > maxEndTime) return 0

  const cnt = new Array(maxEndTime + 2).fill(0)
  for (let i = 0; i < n; i++) {
    cnt[startTime[i]]++
    cnt[endTime[i] + 1]--
  }
  let ans = 0
  for (let i = 0; i <= queryTime; i++)
    ans += cnt[i]

  return ans
}
```

### 二分查找

```ts 
/**
 * 二分查找
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param startTime
 * @param endTime
 * @param queryTime
 * @returns
 */
export function busyStudent3(startTime: number[], endTime: number[], queryTime: number): number {
  startTime.sort((a, b) => a - b)
  endTime.sort((a, b) => a - b)
  const lessStart = upperbound(startTime, 0, startTime.length - 1, queryTime)
  const lessEnd = lowerbound(endTime, 0, endTime.length - 1, queryTime)
  return lessStart - lessEnd

  function upperbound(arr: number[], l: number, r: number, target: number) {
    let ans = r + 1
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (arr[mid] > target) {
        ans = mid
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    return ans
  }

  function lowerbound(arr: number[], l: number, r: number, target: number) {
    let ans = r + 1
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (arr[mid] >= target) {
        ans = mid
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    return ans
  }
}
```