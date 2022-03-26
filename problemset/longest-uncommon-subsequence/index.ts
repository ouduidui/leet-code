/**
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param a
 * @param b
 */
export function findLUSlength(a: string, b: string): number {
  return a !== b ? Math.max(a.length, b.length) : -1
}
