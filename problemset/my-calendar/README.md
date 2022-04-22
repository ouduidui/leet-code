# 我的日程安排表

> 难度：中等
>
> https://leetcode-cn.com/problems/my-calendar-i/

## 题目

实现一个 `MyCalendar` 类来存放你的日程安排。如果要添加的日程安排不会造成 **重复预订** ，则可以存储这个新的日程安排。

当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生 **重复预订** 。

日程可以用一对整数 `start` 和 `end` 表示，这里的时间是半开区间，即 `[start, end)`, 实数 `x` 的范围为，  `start <= x < end` 。

实现 `MyCalendar` 类：

- `MyCalendar()` 初始化日历对象。
- `boolean book(int start, int end)` 如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 `true` 。否则，返回 `false` 并且不要将该日程安排添加到日历中。
 

### 示例：

```
输入：
["MyCalendar", "book", "book", "book"]
[[], [10, 20], [15, 25], [20, 30]]
输出：
[null, true, false, true]

解释：
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20); // return True
myCalendar.book(15, 25); // return False ，这个日程安排不能添加到日历中，因为时间 15 已经被另一个日程安排预订了。
myCalendar.book(20, 30); // return True ，这个日程安排可以添加到日历中，因为第一个日程安排预订的每个时间都小于 20 ，且不包含时间 20 。
```

## 解题

```ts
export class MyCalendar {
  calendar: [number, number][] = []

  /**
   * 二分法
   * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
   * @param start
   * @param end
   * @returns
   */
  book(start: number, end: number): boolean {
    // 如果日程表为空，则直接插入日程安排且返回true
    if (this.calendar.length === 0) {
      this.calendar.push([start, end])
      return true
    }

    // 二分法找到截止日期最接近开始日期的日程
    let left = 0
    let right = this.calendar.length - 1
    while (left < right) {
      const mid = (left + right) >> 0
      const e = this.calendar[mid][1]
      if (e <= start) left = mid
      else right = mid - 1
    }

    const [s, e] = this.calendar[left]
    // 如果该日程的截止日期小于等于start，且该日程为最后一个时，直接在末尾插入日程即可
    if (e <= start && left === this.calendar.length - 1) {
      this.calendar.push([start, end])
      return true
    }
    // 如果该日程的截止日期小于等于start，且下一个日程的开始日期小于end时，则直接在它们中间插入日程即可
    else if (e <= start && this.calendar[left + 1][0] >= end) {
      this.calendar.splice(left + 1, 0, [start, end])
      return true
    }
    // 如果该日程的开始日期大于end时，则直接在最开始插入日程即可
    else if (s >= end) {
      this.calendar.unshift([start, end])
      return true
    }
    // 其他情况均为撞日期情况
    else {
      return false
    }
  }
}
```