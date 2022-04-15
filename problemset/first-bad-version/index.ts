/**
 * 二分法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param isBadVersion
 * @returns
 */
export function solution(
  isBadVersion: (version: number) => boolean,
): (n: number) => number {
  return function(n: number): number {
    let low = 1
    let high = n
    while (low < high) {
      const mid = Math.floor(low + (high - low) / 2)
      if (isBadVersion(mid))
        high = mid
      else
        low = mid + 1
    }
    return low
  }
}
