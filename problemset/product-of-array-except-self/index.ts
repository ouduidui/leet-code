/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function productExceptSelf(nums: number[]): number[] {
  const ans: number[] = []

  const len = nums.length
  for (let i = 0; i < len; i++) {
    let prod = 1
    for (let j = 0; j < len; j++) {
      if (j !== i)
        prod *= nums[j]
    }
    ans.push(prod)
  }

  return ans
}

/**
 * 左右乘积列表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function productExceptSelf2(nums: number[]): number[] {
  const len = nums.length

  const left: number[] = []
  left[0] = 1
  for (let i = 1; i < len; i++)
    left[i] = nums[i - 1] * left[i - 1]

  const right: number[] = []
  right[len - 1] = 1
  for (let i = len - 2; i >= 0; i--)
    right[i] = nums[i + 1] * right[i + 1]

  const ans: number[] = []
  for (let i = 0; i < len; i++)
    ans[i] = left[i] * right[i]

  return ans
}

/**
 * 左右乘积列表 - 优化
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function productExceptSelf3(nums: number[]): number[] {
  const len = nums.length
  const ans: number[] = []

  ans[0] = 1
  for (let i = 1; i < len; i++)
    ans[i] = nums[i - 1] * ans[i - 1]

  let right = 1

  for (let i = len - 1; i >= 0; i--) {
    ans[i] = ans[i] * right
    right *= nums[i]
  }

  return ans
}
