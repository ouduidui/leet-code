/**
 * 二分查找
 * @desc 时间复杂度 O(log²K)  空间复杂度 O(1)
 * @param k
 * @returns
 */
export function preimageSizeFZF(k: number): number {
  return help(k + 1) - help(k)

  function help(k: number) {
    let r = 5 * k
    let l = 0
    while (l <= r) {
      const mid = Math.floor((l + r) / 2)
      if (zeta(mid) < k)
        l = mid + 1
      else
        r = mid - 1
    }
    return r + 1
  }

  function zeta(x: number) {
    let res = 0
    while (x !== 0) {
      res += (x / 5) >> 0
      x = (x / 5) >> 0
    }
    return res
  }
}
