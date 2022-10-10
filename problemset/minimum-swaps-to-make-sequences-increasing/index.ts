/**
 * 动态规划
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums1
 * @param nums2
 * @returns
 */
export function minSwap(nums1: number[], nums2: number[]): number {
  const n = nums1.length
  let a = 0
  let b = 1
  for (let i = 1; i < n; i++) {
    const at = a
    const bt = b
    a = b = n
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      a = Math.min(a, at)
      b = Math.min(b, bt + 1)
    }
    if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
      a = Math.min(a, bt)
      b = Math.min(b, at + 1)
    }
  }
  return Math.min(a, b)
}
