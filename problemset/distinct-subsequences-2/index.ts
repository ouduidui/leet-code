/**
 * 动态规划
 * @desc 时间复杂度 O(N+|Σ|)  空间复杂度 O(|Σ|)
 * @param s
 * @returns
 */
export function distinctSubseqII(s: string): number {
  const MOD = 1000000007
  const g = new Array(26).fill(0)
  const n = s.length; let total = 0
  for (let i = 0; i < n; ++i) {
    const oi = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
    const prev = g[oi]
    g[oi] = (total + 1) % MOD
    total = ((total + g[oi] - prev) % MOD + MOD) % MOD
  }
  return total
}
