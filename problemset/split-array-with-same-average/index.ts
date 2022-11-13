/**
 * 折半搜索
 * @desc 时间复杂度 O(N*2^(N/2)) 空间复杂度 O(2^(N/2))
 * @param nums
 * @returns
 */
export function splitArraySameAverage(nums: number[]): boolean {
  if (nums.length === 1)
    return false

  const n = nums.length
  const m = Math.floor(n / 2)
  let sum = 0
  for (const num of nums)
    sum += num

  for (let i = 0; i < n; i++)
    nums[i] = nums[i] * n - sum

  const left = new Set()
  for (let i = 1; i < (1 << m); i++) {
    let tot = 0
    for (let j = 0; j < m; j++) {
      if ((i & (1 << j)) !== 0)
        tot += nums[j]
    }
    if (tot === 0)
      return true

    left.add(tot)
  }
  let resSum = 0
  for (let i = m; i < n; i++)
    resSum += nums[i]

  for (let i = 1; i < (1 << (n - m)); i++) {
    let tot = 0
    for (let j = m; j < n; j++) {
      if ((i & (1 << (j - m))) !== 0)
        tot += nums[j]
    }
    if (tot === 0 || (resSum !== tot && left.has(-tot)))
      return true
  }
  return false
}

/**
 * 动态规划
 * @desc 时间复杂度 O(N²*sum(nums)) 空间复杂度 O(N*sum(nums))
 * @param nums
 * @returns
 */
export function splitArraySameAverage2(nums: number[]): boolean {
  if (nums.length === 1)
    return false

  const n = nums.length
  const m = Math.floor(n / 2)
  let sum = 0
  for (const num of nums)
    sum += num

  let isPossible = false
  for (let i = 1; i <= m; i++) {
    if (sum * i % n === 0) {
      isPossible = true
      break
    }
  }
  if (!isPossible)
    return false

  const dp = new Array(m + 1).fill(0).map(() => new Set<number>())
  dp[0].add(0)
  for (const num of nums) {
    for (let i = m; i >= 1; i--) {
      for (const x of dp[i - 1]) {
        const curr = x + num
        if (curr * n === sum * i)
          return true

        dp[i].add(curr)
      }
    }
  }
  return false
}
