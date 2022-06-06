/**
 * 线段树
 * @desc 时间复杂度 O(NlogC)  空间复杂度 O(NlogC)
 */
export class MyCalendarThree {
  private tree = new Map<number, number>()
  private lazy = new Map<number, number>()

  book(start: number, end: number): number {
    this.update(start, end - 1, 0, 1000000000, 1)
    return this.tree.get(1) || 0
  }

  private update(start: number, end: number, left: number, right: number, idx: number) {
    if (right < start || end < left)
      return

    if (start <= left && right <= end) {
      this.tree.set(idx, (this.tree.get(idx) || 0) + 1)
      this.lazy.set(idx, (this.lazy.get(idx) || 0) + 1)
    }
    else {
      const mid = (left + right) >> 1
      this.update(start, end, left, mid, 2 * idx)
      this.update(start, end, mid + 1, right, 2 * idx + 1)
      this.tree.set(
        idx,
        (
          this.lazy.get(idx) || 0)
           + Math.max(
             (this.tree.get(2 * idx) || 0),
             (this.tree.get(2 * idx + 1) || 0),
           ),
      )
    }
  }
}
