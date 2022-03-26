/**
 * 预处理 + 前缀和
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(N)
 * @param s
 * @param queries
 */
export function platesBetweenCandles(s: string, queries: number[][]): number[] {
  const len = s.length
  const preSum: number[] = new Array(len).fill(0)
  let i = 0
  let j = 0
  // 从左到右计算每个位置左边的盘子数量
  for (i = 0, j = 0; i < len; i++) {
    if (s[i] === '*') j++
    preSum[i] = j
  }

  // 定位每个点左边最近的蜡烛
  const left = new Array(len).fill(0)
  for (i = 0, j = -1; i < len; i++) {
    if (s[i] === '|') j = i
    left[i] = j
  }

  // 定位每个点右边最近的蜡烛
  const right = new Array(len).fill(0)
  for (i = len - 1, j = -1; i >= 0; i--) {
    if (s[i] === '|') j = i
    right[i] = j
  }

  const ans: number[] = []
  for (i = 0; i < queries.length; i++) {
    const [l, r] = queries[i]
    const x = right[l]
    const y = left[r]
    ans.push(x === -1 || y === -1 || x >= y ? 0 : preSum[y] - preSum[x])
  }

  return ans
}
