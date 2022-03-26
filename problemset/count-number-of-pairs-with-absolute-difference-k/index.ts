/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(1)
 * @param nums
 * @param k
 */
export function countKDifference(nums: number[], k: number): number {
  let ret = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k)
        ret++
    }
  }

  return ret
}

/**
 * 哈希表
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param nums
 * @param k
 */
export function countKDifference2(nums: number[], k: number): number {
  let ret = 0
  const count = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    ret += (count.get(nums[i] - k) || 0) + (count.get(nums[i] + k) || 0)
    count.set(nums[i], (count.get(nums[i]) || 0) + 1)
  }

  return ret
}
