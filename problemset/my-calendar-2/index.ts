/**
 * 直接遍历
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N)
 */
export class MyCalendarTwo {
  booked: [start: number, end: number][] = []
  overlaps: [left: number, end: number][] = []

  book(start: number, end: number): boolean {
    for (const [left, right] of this.overlaps) {
      if (left < end && start < right)
        return false
    }

    for (const [left, right] of this.booked) {
      if (left < end && start < right)
        this.overlaps.push([Math.max(left, start), Math.min(right, end)])
    }

    this.booked.push([start, end])
    return true
  }
}
