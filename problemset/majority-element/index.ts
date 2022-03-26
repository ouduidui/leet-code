/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function majorityElement(nums: number[]): number {
  const counts = new Map<number, number>()

  for (const num of nums)
    counts.set(num, (counts.get(num) || 0) + 1)

  let res: number
  const count = (nums.length / 2) >> 0
  for (const [key, value] of counts.entries()) {
    if (value > count) {
      res = key
      break
    }
  }

  return res!
}

/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function majorityElement2(nums: number[]): number {
  nums.sort((a, b) => a - b)
  return nums[nums.length - 1]
}

/**
 * 分治法
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function majorityElement3(nums: number[]): number {
  return majorityElementRec(nums, 0, nums.length - 1)

  /**
   * 找到l和r区间的众数
   * @param nums
   * @param l
   * @param r
   */
  function majorityElementRec(nums: number[], l: number, r: number): number {
    // 如果只有一个值的话，直接返回
    if (l === r) return nums[l]

    // 进行对半分治，找到左右区间的众数
    const mid = (l + r) >> 1
    const left = majorityElementRec(nums, l, mid)
    const right = majorityElementRec(nums, mid + 1, r)

    // 如果左右区间的众数是一样的，则它就是两个区间合起来的众数
    if (left === right) return left

    // 如果左右区间的众数是不一样，则比较他们出现的次数，返回次数多者
    return countInRange(nums, left, l, r) > countInRange(nums, right, l, r)
      ? left
      : right
  }

  /**
   * 以l和r区间，找到num出现的次数
   * @param nums
   * @param num
   * @param l
   * @param r
   */
  function countInRange(
    nums: number[],
    num: number,
    l: number,
    r: number,
  ): number {
    let count = 0
    for (let i = l; i <= r; i++) {
      if (nums[i] === num)
        count++
    }
    return count
  }
}

/**
 * Boyer-Moore 投票算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function majorityElement4(nums: number[]): number {
  let count = 0 // 出现次数
  let candidate: number // 候选众数

  for (const num of nums) {
    if (count === 0)
      candidate = num

    count += num === candidate! ? 1 : -1
  }

  return candidate!
}
