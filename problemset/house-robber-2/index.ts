/**
 * 回溯
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function rob(nums: number[]): number {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(...nums)

  let res = 0
  backTrack(0, 0, true)
  backTrack(1, 0, false)
  return res

  function backTrack(idx: number, sum: number, hasFirst: boolean) {
    if (idx >= nums.length - 1) {
      if (idx === nums.length - 1)
        sum += hasFirst ? 0 : nums[idx]

      res = Math.max(res, sum)
    }
    else {
      backTrack(idx + 1, sum, hasFirst)
      backTrack(idx + 2, sum + nums[idx], hasFirst)
      backTrack(idx + 3, sum + nums[idx], hasFirst)
    }
  }
}

/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function rob2(nums: number[]): number {
  const len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]
  if (len === 2) return Math.max(...nums)

  return Math.max(robRange(0, len - 2), robRange(1, len - 1))

  function robRange(start: number, end: number) {
    let [prev, cur] = [nums[start], Math.max(nums[start], nums[start + 1])]
    for (let i = start + 2; i <= end; i++)
      [prev, cur] = [cur, Math.max(prev + nums[i], cur)]

    return cur
  }
}
