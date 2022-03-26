/**
 * 二分法
 * @desc 时间复杂度 O(logN)   空间复杂度 O(1)
 * @param x {number}
 * @return {number}
 */
export function mySqrt(x: number): number {
  let left = 0
  let right = x
  let ans = -1

  while (left <= right) {
    const mid = (right + left) >> 1
    if (mid * mid <= x) {
      ans = mid
      left = mid + 1
    }
    else {
      right = mid - 1
    }
  }

  return ans
}

/**
 * 牛顿迭代
 * @desc 时间复杂度 O(logN)   空间复杂度 O(1)
 * @param x {number}
 * @return {number}
 */
export function mySqrt2(x: number): number {
  if (x === 0) return 0

  let t = x
  while (t * t - x >= 1) {
    // k = 2t
    // y = 2tx + b
    // b = (t^2 - C) - 2t^2 = - C - t^2
    // y = 2tx - C - t^2
    // x = (C + t^2) / 2t = 0.5 * (t + C/t)
    t = 0.5 * (t + x / t)
  }

  return Math.floor(t)
}
