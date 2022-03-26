/**
 * 排序+双指针
 * @desc 时间复杂度 O(N^3)  空间复杂度 O(logN)
 * @param nums
 * @param target
 */
export function fourSum(nums: number[], target: number): number[][] {
  const ans: number[][] = []
  if (nums.length < 4) return ans

  // 排序
  nums.sort((a, b) => a - b)

  const len: number = nums.length

  for (let i = 0; i < len - 3; i++) {
    // 如果与上一个相同的话，跳过该次循环
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // 如果相邻四位相加超过target则结束循环
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break

    // 如果与最后三位相加还小于target的话，跳过本次循环
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target)
      continue

    for (let j: number = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) continue

      // 化为三数之和
      let left: number = j + 1
      let right: number = len - 1
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        }
        else if (sum < target) {
          left++
        }
        else {
          right--
        }
      }
    }
  }

  return ans
}
