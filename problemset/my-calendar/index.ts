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
