/**
 * 寻找01串
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 */
export function checkOnesSegment(s: string): boolean {
  return !s.includes('01')
}
