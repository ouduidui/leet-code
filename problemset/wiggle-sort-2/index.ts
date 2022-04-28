/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param nums
 */
export function wiggleSort(nums: number[]): void {
  const sorted = nums.sort((a, b) => a - b).slice()
  let i = nums.length - 1
  let j = i >> 1
  let k = 0
  while (k < sorted.length) {
    nums[k] = (k & 1) ? sorted[i--] : sorted[j--]
    k++
  }
}

/**
 * 快速排序 + 中位数
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function wiggleSort2(nums: number[]): void {
  const len = nums.length
  const mid = getMedian(0, 0, nums) // 中位数
  const leftArr: number[] = []
  const rightArr: number[] = []
  let count = 0 // 记录与中位数相等的数量

  for (const num of nums) {
    if (num > mid)
      rightArr.push(num)
    else if (num < mid)
      leftArr.push(num)
    else
      count++
  }

  // 将mid放入数组中，保证leftArr和rightArr长度相差不超过1
  const diff = leftArr.length - rightArr.length
  if (diff === 0) {
    leftArr.splice(0, 0, ...new Array(Math.ceil(count / 2)).fill(mid))
    rightArr.push(...new Array(count >> 1).fill(mid))
  }
  else if (diff > 0) {
    count -= diff
    leftArr.splice(0, 0, ...new Array(Math.ceil(count / 2)).fill(mid))
    rightArr.push(...new Array((count >> 1) + diff).fill(mid))
  }
  else {
    count += diff
    leftArr.splice(0, 0, ...new Array(Math.ceil(count / 2) - diff).fill(mid))
    rightArr.push(...new Array(count >> 1).fill(mid))
  }

  for (let i = 0; i < len; i++) {
    if (i % 2)
      nums[i] = rightArr.shift()!
    else
      nums[i] = leftArr.shift()!
  }

  /**
   * 使用快排获取中位数
   * @param left
   * @param right
   * @param nums
   * @returns
   */
  function getMedian(left: number, right: number, nums: number[]): number {
    const len = nums.length
    const mid = nums[len >> 1]

    const leftArr: number[] = []
    const rightArr: number[] = []

    // 记录与 mid 相等的数量
    let count = 0
    for (const num of nums) {
      if (num > mid)
        rightArr.push(num)
      else if (num < mid)
        leftArr.push(num)
      else
        count++
    }

    if (Math.abs(left + leftArr.length - right - rightArr.length) <= count)
      return mid
    if (left + leftArr.length > right + rightArr.length)
      return getMedian(left, right + rightArr.length + count, leftArr)
    else
      return getMedian(left + leftArr.length + count, right, rightArr)
  }
}
