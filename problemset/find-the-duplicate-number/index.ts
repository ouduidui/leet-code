/**
 * 暴力解法
 * @desc 时间复杂度 O(N²)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicate(nums: number[]): number {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++)
      if (nums[i] === nums[j]) return nums[i]
  }
  return -1
}

/**
 * 二分查找
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicate2(nums: number[]): number {
  const len = nums.length
  let left = 1
  let right = len - 1
  let ans = -1

  while (left <= right) {
    const mid = (left + right) >> 1
    let count = 0
    // 记录小于 mid 的个数
    for (let i = 0; i < len; i++)
      nums[i] <= mid && count++

    if (count <= mid) {
      left = mid + 1
    }
    else {
      right = mid - 1
      ans = mid
    }
  }

  return ans
}

/**
 * 二进制
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicate3(nums: number[]): number {
  const len = nums.length
  let ans = 0
  // 确定二进制下的最高位
  let maxBit = 31
  while (!((len - 1) >> maxBit))
    maxBit -= 1

  // 对每一位进行比较
  for (let bit = 0; bit <= maxBit; ++bit) {
    let x = 0
    let y = 0
    for (let i = 0; i < len; ++i) {
      // 统计数值该位为 1 的数量
      if (nums[i] & (1 << bit)) x += 1
      // 统计下标该位为 1 的数量
      if (i & (1 << bit)) y += 1
    }
    if (x > y) ans |= 1 << bit
  }

  return ans
}

/**
 * 快慢指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicate4(nums: number[]): number {
  let slow = 0
  let fast = 0

  // 2(slow + fast) = slow + fast = kL
  // slow = kL - fast
  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)

  slow = 0

  // slow = (k - 1)L + (L - fast) = (k - 1)L + C
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
}
