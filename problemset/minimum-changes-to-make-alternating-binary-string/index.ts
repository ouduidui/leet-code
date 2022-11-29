/**
 * 模拟
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param s
 * @returns
 */
export function minOperations(s: string): number {
  let cnt = 0

  for (let i = 0; i < s.length; i++)
    if (s[i] !== (String.fromCharCode('0'.charCodeAt(0) + i % 2))) cnt++

  return Math.min(cnt, s.length - cnt)
}
