/**
 * 基数排序
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function maximumGap(nums: number[]): number {
  const len = nums.length
  if (len <= 2) return nums[len - 1] - nums[0]

  const maxVal = Math.max(...nums)
  const buckets: number[][] = []

  let m = 1

  while (m <= maxVal) {
    // 清空桶
    buckets.length = 0

    for (const num of nums) {
      const d = ~~((num % (m * 10)) / m)
      if (!buckets[d])
        buckets[d] = []

      buckets[d].push(num)
    }

    nums = []
    for (let i = 0; i < buckets.length; i++)
      buckets[i] && nums.push(...buckets[i])

    m *= 10
  }

  let ret = 0
  for (let i = 1; i < len; i++)
    ret = Math.max(ret, nums[i] - nums[i - 1])

  return ret
}

/**
 * 基于桶的算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function maximumGap2(nums: number[]): number {
  const len = nums.length
  if (len <= 2) return nums[len - 1] - nums[0]

  // 找到最大值和最小值
  const maxVal = Math.max(...nums)
  const minVal = Math.min(...nums)
  // 求出每个桶可装的数量，确保每个桶内按序差值不超过平均差值
  const d = Math.max(1, Math.floor(maxVal - minVal) / (len - 1))
  // 算出桶的数量
  const bucketSize = Math.floor((maxVal - minVal) / d) + 1

  // 初始化桶，每个桶维护这一个最小值和最大值
  const buckets: [number, number][] = new Array(bucketSize)
    .fill([])
    .map(() => new Array(2).fill(-1) as [number, number])

  for (let i = 0; i < len; i++) {
    // 求出该数应该放置的桶
    const idx = Math.floor((nums[i] - minVal) / d)
    if (buckets[idx][0] === -1) {
      buckets[idx][0] = buckets[idx][1] = nums[i]
    }
    else {
      buckets[idx][0] = Math.min(buckets[idx][0], nums[i])
      buckets[idx][1] = Math.max(buckets[idx][1], nums[i])
    }
  }

  let ret = 0
  let prev = -1
  for (let i = 0; i < bucketSize; i++) {
    if (buckets[i][0] === -1) continue
    if (prev !== -1)
      ret = Math.max(buckets[i][0] - buckets[prev][1], ret)

    prev = i
  }

  return ret
}
