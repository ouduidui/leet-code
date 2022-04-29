/**
 * 暴力解法
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param nums
 * @param lower
 * @param upper
 * @returns
 */
export function countRangeSum(nums: number[], lower: number, upper: number): number {
  const len = nums.length
  let res = 0

  for (let i = 0; i < len; i++) {
    let sum = 0
    for (let j = i; j < len; j++) {
      sum += nums[j]
      if (sum >= lower && sum <= upper) res++
    }
  }

  return res
}

/**
 * 归并排序
 * @desc 时间复杂度 O(N²)  空间复杂度 O(1)
 * @param nums
 * @param lower
 * @param upper
 * @returns
 */
export function countRangeSum2(nums: number[], lower: number, upper: number): number {
  let s = 0
  const sum = [0]
  for (const val of nums)
    sum.push(s += val)

  return countRangeSumRecursive(sum, lower, upper, 0, sum.length - 1)

  function countRangeSumRecursive(
    sum: number[],
    lower: number,
    upper: number,
    left: number,
    right: number,
  ): number {
    if (left === right) return 0

    const mid = (left + right) >> 1
    const n1 = countRangeSumRecursive(sum, lower, upper, left, mid)
    const n2 = countRangeSumRecursive(sum, lower, upper, mid + 1, right)
    let res = n1 + n2

    // 统计下标对的数量
    let i = left
    let l = mid + 1
    let r = mid + 1

    while (i <= mid) {
      while (l <= right && sum[l] - sum[i] < lower) l++
      while (r <= right && sum[r] - sum[i] <= upper) r++

      res += (r - l)
      i++
    }

    // 合并两个排序数组
    const sorted: number[] = []
    let p1 = left
    let p2 = mid + 1
    let p = 0
    while (p1 <= mid || p2 <= right) {
      if (p1 > mid) {
        sorted[p++] = sum[p2++]
      }
      else if (p2 > right) {
        sorted[p++] = sum[p1++]
      }
      else {
        if (sum[p1] < sum[p2])
          sorted[p++] = sum[p1++]
        else
          sorted[p++] = sum[p2++]
      }
    }
    for (let i = 0; i < sorted.length; i++)
      sum[left + i] = sorted[i]

    return res
  }
}
