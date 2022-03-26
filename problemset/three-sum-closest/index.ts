/**
 * 排序+双指针
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(logN)
 * @param nums
 * @param target
 */
export function threeSumClosest(nums: number[], target: number): number {
  if (nums.length <= 3) {
    return nums.reduce((acc, cur) => {
      acc += cur
      return acc
    }, 0)
  }

  let ans = NaN
  const len: number = nums.length
  // 排序
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    let left: number = i + 1
    let right: number = len - 1

    while (left < right) {
      const sum: number = nums[i] + nums[right] + nums[left]

      if (sum === target) return sum

      if (isNaN(ans) || Math.abs(sum - target) < Math.abs(ans - target))
        ans = sum

      if (sum > target) right--
      if (sum < target) left++
    }
  }

  return ans
}
