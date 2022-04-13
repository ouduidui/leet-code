/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const len = nums.length
  for (let i = 0; i < len; i++)
    if (nums[i] !== i) return i
  return len
}

/**
 * 哈希集合
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function missingNumber2(nums: number[]): number {
  const set = new Set<number>()
  const len = nums.length
  for (let i = 0; i < len; i++)
    set.add(nums[i])

  let missing = -1
  for (let i = 0; i <= len; i++) {
    if (!set.has(i)) {
      missing = i
      break
    }
  }
  return missing
}

/**
 * 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function missingNumber3(nums: number[]): number {
  let xor = 0
  const len = nums.length
  for (let i = 0; i < nums.length; i++)
    xor ^= nums[i]

  for (let i = 0; i <= len; i++)
    xor ^= i

  return xor
}

/**
 * 数学
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function missingNumber4(nums: number[]): number {
  const len = nums.length
  const total = len * (len + 1) >> 1
  let arrSum = 0
  for (let i = 0; i < len; i++)
    arrSum += nums[i]

  return total - arrSum
}
