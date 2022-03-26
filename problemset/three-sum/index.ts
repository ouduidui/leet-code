/**
 * 排序 + 双指针
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(logN)
 * @param nums {number[]}
 * @return {number[][]}
 */
export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return []
  const ans: number[][] = []
  const len: number = nums.length

  // 排序
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    // 如果当前数值大于零，则三数之和一定大于零
    if (nums[i] > 0) break

    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // 双指针
    let left: number = i + 1
    let right: number = len - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]])
        // 去重
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      }
      else if (sum < 0) {
        left++
      }
      else if (sum > 0) {
        right--
      }
    }
  }
  return ans
}
