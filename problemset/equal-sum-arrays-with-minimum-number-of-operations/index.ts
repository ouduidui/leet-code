/**
 * 贪心 + 哈希表
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(C)
 * @param nums1
 * @param nums2
 * @returns
 */
export function minOperations(nums1: number[], nums2: number[]): number {
  const n = nums1.length; const m = nums2.length
  if (6 * n < m || 6 * m < n)
    return -1

  const cnt1: number[] = new Array(7).fill(0)
  const cnt2: number[] = new Array(7).fill(0)
  let diff = 0
  for (const i of nums1) {
    ++cnt1[i]
    diff += i
  }
  for (const i of nums2) {
    ++cnt2[i]
    diff -= i
  }
  if (diff === 0)
    return 0

  if (diff > 0)
    return help(cnt2, cnt1, diff)

  return help(cnt1, cnt2, -diff)

  function help(h1: number[], h2: number[], diff: number) {
    const h = new Array(7).fill(0)
    for (let i = 1; i < 7; ++i) {
      h[6 - i] += h1[i]
      h[i - 1] += h2[i]
    }
    let res = 0
    for (let i = 5; i > 0 && diff > 0; --i) {
      const t = Math.min(Math.floor((diff + i - 1) / i), h[i])
      res += t
      diff -= t * i
    }
    return res
  }
}
