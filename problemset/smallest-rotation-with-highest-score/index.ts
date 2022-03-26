/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 */
export function bestRotation(nums: number[]): number {
  const len = nums.length
  let maxScore = 0
  let k = 0
  let result = 0

  while (k < len) {
    let score = 0
    for (let i = 0; i < len; i++)
      if (nums[(i + k) % len] <= i) score++

    if (score > maxScore) {
      maxScore = score
      result = k
    }

    k++
  }

  return result
}

/**
 * 差分数组
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function bestRotation2(nums: number[]): number {
  const len = nums.length
  // 差分数组，下标为轮调次数k，值为该轮调次数相对上一次轮调的得分差
  const diffs = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    // nums[i]在 [low, high) 范围内会得分
    const low = (i + 1) % len
    const high = (i - nums[i] + len + 1) % len
    diffs[low]++
    diffs[high]--
    if (low >= high) diffs[0]++
  }

  let bestIdx = 0
  let maxScore = 0
  let score = 0
  for (let i = 0; i < len; i++) {
    score += diffs[i]
    if (score > maxScore) {
      bestIdx = i
      maxScore = score
    }
  }

  return bestIdx
}
