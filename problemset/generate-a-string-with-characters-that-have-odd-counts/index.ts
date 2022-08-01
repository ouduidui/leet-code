/**
 * 分类讨论
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function generateTheString(n: number): string {
  return n % 2 === 1 ? 'a'.repeat(n) : `${'a'.repeat(n - 1)}b`
}
