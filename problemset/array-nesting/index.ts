/**
 * 图
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function arrayNesting(nums: number[]): number {
  let ans = 0
  const len = nums.length

  const vis: boolean[] = new Array(len).fill(false)
  for (let i = 0; i < len; i++) {
    let cnt = 0
    while (!vis[i]) {
      vis[i] = true
      i = nums[i]
      cnt++
    }
    ans = Math.max(ans, cnt)
  }

  return ans
}

/**
 * 原地标记
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function arrayNesting2(nums: number[]): number {
  let ans = 0
  const len = nums.length

  for (let i = 0; i < len; i++) {
    let cnt = 0
    while (nums[i] < len) {
      const num = nums[i]
      nums[i] = len
      i = num
      cnt++
    }
    ans = Math.max(ans, cnt)
  }

  return ans
}
