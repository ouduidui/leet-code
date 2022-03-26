/**
 * 暴力解法
 * @desc 时间复杂度 O((n+m)log(n+m)) 空间复杂度 O(n+m)
 * @desc https://segmentfault.com/a/1190000010648740
 * @param nums1 {Array<number>}
 * @param nums2 {Array<number>}
 * @return {number}
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  // 合并数组
  let nums: number[] = [...nums1, ...nums2]

  const len = nums.length
  if (len === 1) return nums[0]

  // 使用sort对数组进行排序
  nums = nums.sort((a, b) => a - b)
  // 判断数组长度，返回中位数
  if (len % 2) {
    // 奇数长度
    return nums[(len - 1) / 2]
  }
  else {
    // 偶数长度
    return (nums[len / 2] + nums[len / 2 - 1]) / 2
  }
}

/**
 * 二分法
 * @desc 时间复杂度 O(log(n+m)) 空间复杂度 O(1)
 * @param nums1 {Array<number>}
 * @param nums2 {Array<number>}
 * @return {number}
 */
export function findMedianSortedArrays2(
  nums1: number[],
  nums2: number[],
): number {
  // 总长度
  const len: number = nums1.length + nums2.length

  // 判断是奇数还是偶数
  if (len % 2) {
    const middleIdx: number = (len - 1) / 2
    return getMedian(nums1, nums2, middleIdx, false)
  }
  else {
    const middleIdx: number = len / 2 // 获取第二个中位值idx
    return getMedian(nums1, nums2, middleIdx, true)
  }

  /**
   * 获取数组的中位值
   * @param nums1 {Array<number>}
   * @param nums2 {Array<number>}
   * @param middleIdx {number}
   * @param isEven {boolean} 是否为偶数
   */
  function getMedian(
    nums1: Array<number>,
    nums2: Array<number>,
    middleIdx: number,
    isEven = false,
  ): number {
    let idx1 = 0
    let idx2 = 0

    let prevMedian = NaN
    let median = NaN

    // 遍历
    while (idx1 + idx2 <= middleIdx) {
      // 获取两个数组当前值
      const num1: number = nums1[idx1]
      const num2: number = nums2[idx2]

      if (num1 === num2) {
        // 如果num1等于num2，判断idx1和idx2是否来到临界值，如果是的话，只进一位；如果不是的话进两位
        idx1 + idx2 < middleIdx
          ? (prevMedian = median = num1)
          : setMedian(num1)
        idx1++
        idx2++
      }
      else if (num1 < num2 || (!num2 && num2 !== 0)) {
        // 如果num1小于num2，或者num2没有值
        idx1++
        setMedian(num1)
      }
      else if (num1 > num2 || (!num1 && num1 !== 0)) {
        // 如果num1大于num2，或者num1没有值
        idx2++
        setMedian(num2)
      }
    }

    return isEven ? (prevMedian + median) / 2 : median

    /**
     * 设置中位数
     * @param num {number}
     */
    function setMedian(num: number): void {
      if (isNaN(median)) {
        prevMedian = median = num
      }
      else {
        prevMedian = median
        median = num
      }
    }
  }
}

/**
 * 划分数组
 * @desc 时间复杂度 O(log min(n,m)) 空间复杂度 O(1)
 * @param nums1 {Array<number>}
 * @param nums2 {Array<number>}
 * @return {number}
 */
export function findMedianSortedArrays3(
  nums1: number[],
  nums2: number[],
): number {
  // 确保nums1长度小于nums2
  if (nums1.length > nums2.length)
    return findMedianSortedArrays3(nums2, nums1)

  const len1: number = nums1.length
  const len2: number = nums2.length

  // 前一部分的最大值
  let median1 = 0
  // 后一部分的最小值
  let median2 = 0

  let left = 0
  let right: number = len1

  while (left <= right) {
    // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]
    // 后一部分包含 nums1[i .. len1-1] 和 nums2[j .. len2-1]
    const i: number = Math.floor((left + right) / 2)
    const j: number = Math.floor((len1 + len2 + 1) / 2) - i

    // nums_im1, nums_i, nums_jm1, nums_j 分别表示 nums1[i-1], nums1[i], nums2[j-1], nums2[j]
    const num_im1: number = i === 0 ? -Infinity : nums1[i - 1]
    const num_i: number = i === len1 ? Infinity : nums1[i]
    const num_jm1: number = j === 0 ? -Infinity : nums2[j - 1]
    const num_j: number = j === len2 ? Infinity : nums2[j]

    if (num_im1 <= num_j) {
      median1 = Math.max(num_im1, num_jm1)
      median2 = Math.min(num_i, num_j)
      left = i + 1
    }
    else {
      right = i - 1
    }
  }

  return (len1 + len2) % 2 ? median1 : (median1 + median2) / 2
}
