/**
 * 位移
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param left
 * @param right
 */
export function rangeBitwiseAnd(left: number, right: number): number {
  let shift = 0
  // 找到公共前缀
  while (left < right) {
    left >>= 1
    right >>= 1
    shift++
  }

  return left << shift
}

/**
 * Brian Kernighan 算法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param left
 * @param right
 */
export function rangeBitwiseAnd2(left: number, right: number): number {
  while (left < right) {
    // 抹去最右边的 1
    right = right & (right - 1)
  }

  return right
}
