/**
 * 动态规划
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N)
 * @param nums
 */
export function lengthOfLIS(nums: number[]): number {
  const len = nums.length
  if (len === 0) return 0

  // 初始状态都为 1
  const dp = new Array(len).fill(1)
  let maxAns = 1
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j])
        dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    maxAns = Math.max(maxAns, dp[i])
  }

  return maxAns
}

/**
 * 贪心 + 二分查找
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param nums
 */
export function lengthOfLIS2(nums: number[]): number {
  const len = nums.length
  if (len === 0) return 0

  // 最大递增子序列数组
  const d: number[] = [nums[0]]

  for (let i = 1; i < len; i++) {
    // 贪心算法
    if (nums[i] > d[d.length - 1]) {
      // 如果单调递增的话，直接插入 d 数组中
      d.push(nums[i])
    }
    // 二分法
    else {
      let left = 0
      let right = d.length - 1
      while (left <= right) {
        const mid = (left + right) >> 1
        // 找到d数组中大于nums[i]的最小值
        if (d[mid] < nums[i])
          left = mid + 1
        else
          right = mid - 1
      }
      // 将其替换为nums[i]
      d[left] = nums[i]
    }
  }

  return d.length
}
