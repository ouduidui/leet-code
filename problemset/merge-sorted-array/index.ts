/**
 * 逆向双指针
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(1)
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  let point1 = m - 1
  let point2 = n - 1
  let len = m + n - 1
  while (point1 >= 0 || point2 >= 0) {
    if (point1 === -1)
      nums1[len--] = nums2[point2--]
    else if (point2 === -1)
      nums1[len--] = nums1[point1--]
    else if (nums1[point1] > nums2[point2])
      nums1[len--] = nums1[point1--]
    else
      nums1[len--] = nums2[point2--]
  }
}
