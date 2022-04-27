/**
 * 单调栈 + 分治
 * @desc 时间复杂度 O(K(M+N+k²))  空间复杂度 O(k)
 * @param nums1
 * @param nums2
 * @param k
 * @returns
 */
export function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
  const m = nums1.length
  const n = nums2.length
  const maxSubsequence = new Array(k).fill(0)
  const start = Math.max(0, k - n)
  const end = Math.min(k, m)

  for (let i = start; i <= end; i++) {
    const subsequence1 = genMaxSubsequence(nums1, i)
    const subsequence2 = genMaxSubsequence(nums2, k - i)
    const curMaxSubsequence = merge(subsequence1, subsequence2)
    if (compare(curMaxSubsequence, 0, maxSubsequence, 0))
      maxSubsequence.splice(0, k, ...curMaxSubsequence)
  }

  return maxSubsequence

  /**
   * 从nums中生成k长度的最大子序列
   * @param nums
   * @param k
   * @returns
   */
  function genMaxSubsequence(nums: number[], k: number): number[] {
    const len = nums.length
    const stack = new Array(k).fill(0)
    let top = -1
    let remain = len - k
    for (const num of nums) {
      while (top >= 0 && stack[top] < num && remain > 0) {
        top--
        remain--
      }
      if (top < k - 1)
        stack[++top] = num
      else
        remain--
    }

    return stack
  }

  /**
   * 合并两个序列
   * @param subsequence1
   * @param subsequence2
   * @returns
   */
  function merge(subsequence1: number[], subsequence2: number[]): number[] {
    const l1 = subsequence1.length
    const l2 = subsequence2.length
    if (l1 === 0) return subsequence2
    if (l2 === 0) return subsequence1

    const len = l1 + l2
    const merged: number[] = []
    let idx1 = 0
    let idx2 = 0
    for (let i = 0; i < len; i++) {
      if (compare(subsequence1, idx1, subsequence2, idx2))
        merged[i] = subsequence1[idx1++]
      else
        merged[i] = subsequence2[idx2++]
    }

    return merged
  }

  /**
   * 比较序列
   * @param subsequence1
   * @param idx1
   * @param subsequence2
   * @param idx2
   * @returns
   */
  function compare(
    subsequence1: number[],
    idx1: number,
    subsequence2: number[],
    idx2: number,
  ): boolean {
    const l1 = subsequence1.length
    const l2 = subsequence2.length
    while (idx1 < l1 && idx2 < l2) {
      // 如果当前两个元素不相等，判断第一个序列的元素是否大于第二个序列的元素
      if (subsequence1[idx1] !== subsequence2[idx2])
        return subsequence1[idx1] - subsequence2[idx2] > 0

      idx1++
      idx2++
    }

    // 如果所有匹配元素都一一相等，则判断第一个序列是否还有剩余长度
    return l1 - idx1 > 0
  }
}
