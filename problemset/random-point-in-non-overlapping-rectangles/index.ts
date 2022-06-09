/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * 前缀和 + 二分查找
 */
export class Solution {
  arr = [0]

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(N)
   * @param rects
   */
  constructor(public rects: number[][]) {
    for (const [a, b, x, y] of rects)
      this.arr.push(this.arr[this.arr.length - 1] + (x - a + 1) * (y - b + 1))
  }

  /**
   * 时间复杂度 O(logN)  空间复杂度 O(1)
   * @returns
   */
  pick(): number[] {
    let k = (Math.random() * this.arr[this.arr.length - 1]) >> 0
    const rectIndex = this.binarySearch(k + 1) - 1
    k -= this.arr[rectIndex]
    const [a, b, _, y] = this.rects[rectIndex]
    const col = y - b + 1
    const da = (k / col) >> 0
    const db = k - col * da
    return [a + da, b + db]
  }

  private binarySearch(target: number) {
    let low = 0
    let high = this.arr.length - 1
    while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low
      const num = this.arr[mid]
      if (num === target)
        return mid
      else if (num > target)
        high = mid - 1
      else
        low = mid + 1
    }

    return low
  }
}
