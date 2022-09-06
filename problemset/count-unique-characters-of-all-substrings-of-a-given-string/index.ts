/**
 * 分别计算每个字符的贡献
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param s
 * @returns
 */
export function uniqueLetterString(s: string): number {
  const index = new Map<string, number[]>()
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (!index.has(c)) {
      index.set(c, [])
      index.get(c)!.push(-1)
    }
    index.get(c)!.push(i)
  }
  let res = 0
  for (const [, arr] of index.entries()) {
    arr.push(s.length)
    for (let i = 1; i < arr.length - 1; i++)
      res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i])
  }
  return res
}
