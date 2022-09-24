/**
 * 滑动窗口
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param code
 * @param k
 * @returns
 */
export function decrypt(code: number[], k: number): number[] {
  const n = code.length
  if (k === 0)
    return new Array(n).fill(0)

  const res = new Array(n).fill(0)
  const newCode = new Array(n * 2).fill(0).map((_, idx) => {
    return code[idx % code.length]
  })
  code = newCode
  let l = k > 0 ? 1 : n + k
  let r = k > 0 ? k : n - 1
  let w = 0
  for (let i = l; i <= r; i++)
    w += code[i]

  for (let i = 0; i < n; i++) {
    res[i] = w
    w -= code[l]
    w += code[r + 1]
    l++
    r++
  }
  return res
}
